import React, { useState, useEffect, useRef } from 'react';
import {
  Timer,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  Trophy,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Volume2
} from 'lucide-react';
import { IrregularVerb, QuizQuestion, QuizResult } from '../types';
import { IRREGULAR_VERBS, getVerbsByDay } from '../data/verbsData';
import { playSound, saveQuizResult } from '../utils/storage';
import { speakEnglish } from '../utils/speech';

interface QuizViewProps {
  currentDay: number;
  learnedVerbIds: number[];
  onViewHistory: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentDay,
  learnedVerbIds,
  onViewHistory,
}) => {
  // Quiz setup states
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'finished'>('setup');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(15); // seconds
  const [quizScope, setQuizScope] = useState<'day1' | 'currentDay' | 'learned' | 'all'>('day1');

  // Active quiz states
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<
    {
      verbV1: string;
      questionPrompt: string;
      userAnswer: string;
      correctAnswer: string;
      isCorrect: boolean;
    }[]
  >([]);

  const [totalElapsedTime, setTotalElapsedTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const elapsedTimerRef = useRef<number | null>(null);

  // Generate question list
  const generateQuestions = (): QuizQuestion[] => {
    let pool: IrregularVerb[] = [];
    if (quizScope === 'day1') {
      pool = getVerbsByDay(1);
    } else if (quizScope === 'currentDay') {
      pool = getVerbsByDay(currentDay);
    } else if (quizScope === 'learned') {
      pool = IRREGULAR_VERBS.filter(v => learnedVerbIds.includes(v.id));
      if (pool.length < 4) pool = IRREGULAR_VERBS; // fallback if few learned
    } else {
      pool = IRREGULAR_VERBS;
    }

    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const selectedVerbs = shuffledPool.slice(0, Math.min(questionCount, pool.length));

    return selectedVerbs.map((verb) => {
      const qTypeRand = Math.random();
      let type: QuizQuestion['type'] = 'v1_to_v2v3';
      let prompt = '';
      let subPrompt = '';
      let correctAnswer = '';

      if (qTypeRand < 0.4) {
        // Cho V1 + nghĩa -> Chọn V2 và V3
        type = 'v1_to_v2v3';
        prompt = `Chọn dạng V2 (Quá khứ) và V3 (Quá khứ phân từ) của:`;
        subPrompt = `"${verb.v1.toUpperCase()}" (${verb.meaning})`;
        correctAnswer = `${verb.v2.toUpperCase()} — ${verb.v3.toUpperCase()}`;
      } else if (qTypeRand < 0.7) {
        // Cho Nghĩa tiếng Việt -> Chọn bộ ba V1 - V2 - V3
        type = 'meaning_to_all';
        prompt = `Động từ nào có nghĩa là:`;
        subPrompt = `"${verb.meaning}"`;
        correctAnswer = `${verb.v1.toUpperCase()} — ${verb.v2.toUpperCase()} — ${verb.v3.toUpperCase()}`;
      } else {
        // Cho V1 -> Tìm V3
        type = 'find_v3';
        prompt = `Quá khứ phân từ (V3) của "${verb.v1.toUpperCase()}" là gì?`;
        subPrompt = `Nghĩa: ${verb.meaning}`;
        correctAnswer = verb.v3.toUpperCase();
      }

      // Generate 3 plausible distractors
      const distractors = IRREGULAR_VERBS.filter(v => v.id !== verb.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(d => {
          if (type === 'v1_to_v2v3') {
            return `${d.v2.toUpperCase()} — ${d.v3.toUpperCase()}`;
          } else if (type === 'meaning_to_all') {
            return `${d.v1.toUpperCase()} — ${d.v2.toUpperCase()} — ${d.v3.toUpperCase()}`;
          } else {
            return d.v3.toUpperCase();
          }
        });

      const options = [...distractors, correctAnswer].sort(() => Math.random() - 0.5);
      const correctIndex = options.indexOf(correctAnswer);

      return {
        verb,
        type,
        prompt,
        subPrompt,
        options,
        correctIndex,
        correctAnswer,
        explanation: `V1: ${verb.v1} | V2: ${verb.v2} | V3: ${verb.v3} (Nghĩa: ${verb.meaning})`
      };
    });
  };

  // Start the quiz
  const handleStartQuiz = () => {
    const generated = generateQuestions();
    if (generated.length === 0) return;

    setQuestions(generated);
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setTimeLeft(timePerQuestion);
    setTotalElapsedTime(0);
    setQuizState('active');
    playSound('click');
  };

  // Countdown timer effect
  useEffect(() => {
    if (quizState !== 'active') return;

    // Elapsed total timer
    elapsedTimerRef.current = window.setInterval(() => {
      setTotalElapsedTime(prev => prev + 1);
    }, 1000);

    return () => {
      if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);
    };
  }, [quizState]);

  // Per-question timer
  useEffect(() => {
    if (quizState !== 'active') return;

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up for current question
          handleTimeUp();
          return timePerQuestion;
        }
        if (prev <= 4) {
          playSound('tick');
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState, currentIndex, timePerQuestion]);

  // When time runs out on a question
  const handleTimeUp = () => {
    const q = questions[currentIndex];
    if (!q) return;

    playSound('wrong');

    const record = {
      verbV1: q.verb.v1,
      questionPrompt: `${q.prompt} ${q.subPrompt || ''}`,
      userAnswer: '(Hết giờ)',
      correctAnswer: q.correctAnswer,
      isCorrect: false,
    };

    advanceToNext([...userAnswers, record]);
  };

  // When user clicks an option
  const handleSelectAnswer = (optionIdx: number) => {
    if (selectedOption !== null || quizState !== 'active') return;

    setSelectedOption(optionIdx);
    const q = questions[currentIndex];
    const isCorrect = optionIdx === q.correctIndex;

    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }

    const record = {
      verbV1: q.verb.v1,
      questionPrompt: `${q.prompt} ${q.subPrompt || ''}`,
      userAnswer: q.options[optionIdx],
      correctAnswer: q.correctAnswer,
      isCorrect,
    };

    // Short delay to show green/red feedback before moving to next
    setTimeout(() => {
      advanceToNext([...userAnswers, record]);
    }, 800);
  };

  const advanceToNext = (updatedAnswers: typeof userAnswers) => {
    setUserAnswers(updatedAnswers);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(timePerQuestion);
    } else {
      // Quiz finished - save score
      finishQuiz(updatedAnswers);
    }
  };

  const finishQuiz = (finalAnswers: typeof userAnswers) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (elapsedTimerRef.current) clearInterval(elapsedTimerRef.current);

    setQuizState('finished');
    playSound('complete');

    const score = finalAnswers.filter(a => a.isCorrect).length;
    const total = finalAnswers.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const result: QuizResult = {
      id: `quiz-${Date.now()}`,
      timestamp: Date.now(),
      dateString: new Date().toLocaleString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      score,
      total,
      percentage,
      timeSeconds: totalElapsedTime,
      scope:
        quizScope === 'day1'
          ? 'Ngày 1'
          : quizScope === 'currentDay'
          ? `Ngày ${currentDay}`
          : quizScope === 'learned'
          ? 'Từ đã học'
          : 'Tất cả 360 từ',
      answers: finalAnswers,
    };

    // Prompt requirement: "và lưu điểm số cuối mỗi bài kiểm tra"
    saveQuizResult(result);
  };

  const currentQ = questions[currentIndex];
  const progressPercent = questions.length > 0 ? Math.round(((currentIndex) / questions.length) * 100) : 0;
  const timeBarPercent = (timeLeft / timePerQuestion) * 100;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* SETUP SCREEN */}
      {quizState === 'setup' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-lg mx-auto space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-2xs">
              <Timer className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Trắc Nghiệm Tính Giờ
            </h2>
            <p className="text-xs text-slate-500">
              Kiểm tra phản xạ động từ bất quy tắc &bull; Đồng hồ đếm ngược &bull; Điểm số được lưu tự động sau mỗi bài
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            {/* Scope */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Phạm vi bài thi
              </label>
              <select
                id="quiz-scope-select"
                value={quizScope}
                onChange={(e) => setQuizScope(e.target.value as any)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="day1">Động từ Ngày 1 (Có GET, BE, GO...)</option>
                <option value="currentDay">Động từ Ngày {currentDay}</option>
                <option value="learned">Chỉ từ đã học ({learnedVerbIds.length} từ)</option>
                <option value="all">Toàn bộ 360 động từ</option>
              </select>
            </div>

            {/* Questions count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Số lượng câu hỏi
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    id={`quiz-count-${num}`}
                    type="button"
                    onClick={() => setQuestionCount(num)}
                    className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${
                      questionCount === num
                        ? 'bg-red-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {num} câu
                  </button>
                ))}
              </div>
            </div>

            {/* Time per question */}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Thời gian mỗi câu hỏi</span>
                <span className="text-red-600">{timePerQuestion} giây / câu</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[10, 15, 30].map((sec) => (
                  <button
                    key={sec}
                    id={`quiz-timer-${sec}`}
                    type="button"
                    onClick={() => setTimePerQuestion(sec)}
                    className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                      timePerQuestion === sec
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{sec} giây</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <button
              id="view-saved-history-btn"
              onClick={onViewHistory}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Xem lịch sử điểm số đã lưu</span>
            </button>

            <button
              id="start-quiz-btn"
              onClick={handleStartQuiz}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>BẮT ĐẦU KIỂM TRA</span>
            </button>
          </div>
        </div>
      )}

      {/* ACTIVE QUIZ SCREEN */}
      {quizState === 'active' && currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Header bar: Progress + Countdown Timer */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Câu hỏi {currentIndex + 1} / {questions.length}
              </span>
              <div className="w-32 sm:w-48 bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-slate-900 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Countdown Badge */}
            <div
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono font-bold text-sm transition-colors ${
                timeLeft <= 4
                  ? 'bg-red-100 text-red-600 animate-pulse ring-2 ring-red-400'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>
          </div>

          {/* Time Bar */}
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-linear ${
                timeLeft <= 4 ? 'bg-red-600' : 'bg-red-500'
              }`}
              style={{ width: `${timeBarPercent}%` }}
            />
          </div>

          {/* Question Display */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {currentQ.prompt}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide">
              {currentQ.subPrompt}
            </div>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((option, idx) => {
              let btnClass = 'bg-white border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50';

              if (selectedOption !== null) {
                if (idx === currentQ.correctIndex) {
                  btnClass = 'bg-green-600 border-green-600 text-white font-bold shadow-xs';
                } else if (idx === selectedOption) {
                  btnClass = 'bg-red-600 border-red-600 text-white font-bold shadow-xs';
                } else {
                  btnClass = 'opacity-40 bg-white border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={idx}
                  id={`quiz-option-${idx}`}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelectAnswer(idx)}
                  className={`p-4 rounded-xl border-2 text-left font-bold text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-black/5 flex items-center justify-center text-xs font-mono">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {selectedOption !== null && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  )}
                  {selectedOption === idx && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-white shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* FINISHED / RESULTS SCREEN */}
      {quizState === 'finished' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Result Card */}
          <div className="text-center max-w-md mx-auto space-y-3">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-xs">
              <Award className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                ĐÃ LƯU KẾT QUẢ VÀO HỆ THỐNG
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight pt-1">
                {userAnswers.filter(a => a.isCorrect).length} / {userAnswers.length} Câu đúng
              </h2>
              <p className="text-sm font-semibold text-slate-600">
                Đạt{' '}
                <span className="text-red-600 font-bold">
                  {Math.round(
                    (userAnswers.filter(a => a.isCorrect).length / userAnswers.length) * 100
                  )}
                  %
                </span>{' '}
                &bull; Thời gian: {totalElapsedTime} giây
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              id="retake-quiz-btn"
              onClick={() => setQuizState('setup')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm bài kiểm tra mới</span>
            </button>

            <button
              id="go-to-history-btn"
              onClick={onViewHistory}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-2xs"
            >
              <Trophy className="w-4 h-4" />
              <span>Xem Bảng Điểm & Lịch Sử</span>
            </button>
          </div>

          {/* Question Breakdown List */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Chi tiết câu hỏi & đáp án:
            </h3>

            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {userAnswers.map((ans, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border text-xs flex items-start justify-between gap-3 ${
                    ans.isCorrect
                      ? 'bg-green-50/50 border-green-200 text-green-950'
                      : 'bg-red-50/50 border-red-200 text-red-950'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {ans.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold">
                        Câu {i + 1}: {ans.questionPrompt}
                      </div>
                      <div className="text-slate-600 mt-1">
                        Bạn chọn: <span className={ans.isCorrect ? 'font-bold text-green-700' : 'font-bold text-red-600'}>{ans.userAnswer}</span>
                        {!ans.isCorrect && (
                          <span className="ml-2 font-bold text-slate-900">
                            (Đáp án chuẩn: {ans.correctAnswer})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
