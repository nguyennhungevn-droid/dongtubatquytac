import React, { useState } from 'react';
import {
  Trophy,
  Trash2,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Target,
  Award,
  Zap
} from 'lucide-react';
import { QuizResult } from '../types';
import { clearQuizHistory, playSound } from '../utils/storage';

interface ScoreHistoryViewProps {
  history: QuizResult[];
  onRefreshHistory: () => void;
  onStartNewQuiz: () => void;
}

export const ScoreHistoryView: React.FC<ScoreHistoryViewProps> = ({
  history,
  onRefreshHistory,
  onStartNewQuiz,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleClear = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử điểm số không?')) {
      playSound('click');
      clearQuizHistory();
      onRefreshHistory();
    }
  };

  // Compute analytics
  const totalTests = history.length;
  const highestScore = totalTests > 0 ? Math.max(...history.map(h => h.percentage)) : 0;
  const avgScore = totalTests > 0 ? Math.round(history.reduce((acc, h) => acc + h.percentage, 0) / totalTests) : 0;
  const perfectTests = history.filter(h => h.percentage === 100).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner / Summary Stats */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                Bảng Điểm & Lịch Sử Kiểm Tra
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Điểm số các bài trắc nghiệm tính giờ được lưu tự động trên thiết bị
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {totalTests > 0 && (
              <button
                id="clear-quiz-history-btn"
                onClick={handleClear}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa lịch sử</span>
              </button>
            )}

            <button
              id="new-quiz-from-history-btn"
              onClick={onStartNewQuiz}
              className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-2xs"
            >
              Làm bài kiểm tra mới
            </button>
          </div>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Target className="w-3.5 h-3.5 text-slate-600" />
              <span>Số bài đã làm</span>
            </div>
            <div className="text-2xl font-black text-slate-900">{totalTests}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Điểm cao nhất</span>
            </div>
            <div className="text-2xl font-black text-amber-600">{highestScore}%</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-blue-500" />
              <span>Điểm trung bình</span>
            </div>
            <div className="text-2xl font-black text-slate-900">{avgScore}%</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-green-500" />
              <span>Điểm tuyệt đối (100%)</span>
            </div>
            <div className="text-2xl font-black text-green-600">{perfectTests}</div>
          </div>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider px-1">
          Danh sách các bài kiểm tra gần đây:
        </h3>

        {history.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-2xs space-y-3">
            <Trophy className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-semibold text-slate-700">Chưa có bài kiểm tra nào được lưu.</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Hãy hoàn thành một bài trắc nghiệm tính giờ để lưu kết quả và theo dõi tiến độ của bạn tại đây!
            </p>
            <button
              onClick={onStartNewQuiz}
              className="mt-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-2xs inline-block"
            >
              Bắt đầu kiểm tra ngay
            </button>
          </div>
        ) : (
          history.map((record) => {
            const isExpanded = expandedId === record.id;
            const isHigh = record.percentage >= 80;

            return (
              <div
                key={record.id}
                id={`record-${record.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                {/* Record Header */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : record.id)}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base shadow-2xs ${
                        isHigh
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {record.percentage}%
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-slate-900">
                          {record.score} / {record.total} Câu đúng
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {record.scope}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {record.dateString}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {record.timeSeconds} giây
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </div>

                {/* Detailed answers accordion */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-2 text-xs">
                    <div className="font-bold text-slate-600 mb-2">Chi tiết từng câu hỏi:</div>
                    {record.answers.map((ans, aIdx) => (
                      <div
                        key={aIdx}
                        className={`p-3 rounded-xl border flex items-start justify-between gap-3 ${
                          ans.isCorrect
                            ? 'bg-white border-green-200 text-slate-800'
                            : 'bg-white border-red-200 text-slate-800'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {ans.isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="font-semibold text-slate-900">
                              Câu {aIdx + 1}: {ans.questionPrompt}
                            </div>
                            <div className="mt-0.5 text-slate-600">
                              Đã chọn: <span className={ans.isCorrect ? 'font-bold text-green-700' : 'font-bold text-red-600'}>{ans.userAnswer}</span>
                              {!ans.isCorrect && (
                                <span className="ml-2 font-bold text-slate-900">
                                  (Đúng: {ans.correctAnswer})
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
