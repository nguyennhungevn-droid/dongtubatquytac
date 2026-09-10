import React, { useState } from 'react';
import {
  Volume2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  RotateCcw,
  Sparkles,
  Play,
  Square,
  ArrowRight,
  Info
} from 'lucide-react';
import { IrregularVerb } from '../types';
import { IRREGULAR_VERBS, TOTAL_DAYS, TOTAL_VERBS, getVerbsByDay } from '../data/verbsData';
import { speakEnglish, speakVietnamese, speakVerbAll, stopSpeech } from '../utils/speech';
import { playSound } from '../utils/storage';

interface VocabularyTableProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  learnedVerbIds: number[];
  onToggleLearned: (id: number) => void;
  onGoToPractice: (day: number) => void;
}

export const VocabularyTable: React.FC<VocabularyTableProps> = ({
  currentDay,
  onSelectDay,
  learnedVerbIds,
  onToggleLearned,
  onGoToPractice,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'day' | 'all' | 'learned' | 'unlearned'>('day');
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const [isPlayingDayAll, setIsPlayingDayAll] = useState(false);

  // Verbs for current day
  const dayVerbs = getVerbsByDay(currentDay);

  // Determine which list to show based on filters & search
  const displayedVerbs: IrregularVerb[] = React.useMemo(() => {
    let list: IrregularVerb[] = [];
    if (filterType === 'day') {
      list = dayVerbs;
    } else if (filterType === 'all') {
      list = IRREGULAR_VERBS;
    } else if (filterType === 'learned') {
      list = IRREGULAR_VERBS.filter(v => learnedVerbIds.includes(v.id));
    } else if (filterType === 'unlearned') {
      list = IRREGULAR_VERBS.filter(v => !learnedVerbIds.includes(v.id));
    }

    if (!searchQuery.trim()) {
      return list;
    }

    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      v =>
        v.v1.toLowerCase().includes(q) ||
        v.v2.toLowerCase().includes(q) ||
        v.v3.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q)
    );
  }, [filterType, currentDay, dayVerbs, learnedVerbIds, searchQuery]);

  const handleSpeakVerb = async (verb: IrregularVerb) => {
    setSpeakingId(verb.id);
    playSound('click');
    await speakVerbAll(verb.v1, verb.v2, verb.v3, verb.meaning);
    setSpeakingId(null);
  };

  const handleSpeakEnglishWord = (word: string) => {
    playSound('click');
    speakEnglish(word, 0.85);
  };

  const handleSpeakVietnamese = (meaning: string) => {
    playSound('click');
    speakVietnamese(meaning, 0.95);
  };

  const handlePlayAllDayVerbs = async () => {
    if (isPlayingDayAll) {
      stopSpeech();
      setIsPlayingDayAll(false);
      return;
    }

    setIsPlayingDayAll(true);
    for (const verb of dayVerbs) {
      setSpeakingId(verb.id);
      await speakVerbAll(verb.v1, verb.v2, verb.v3, verb.meaning);
      await new Promise(r => setTimeout(r, 600));
    }
    setSpeakingId(null);
    setIsPlayingDayAll(false);
  };

  const handleMarkAllDayLearned = () => {
    playSound('correct');
    dayVerbs.forEach(v => {
      if (!learnedVerbIds.includes(v.id)) {
        onToggleLearned(v.id);
      }
    });
  };

  const handleUnmarkAllDay = () => {
    playSound('click');
    dayVerbs.forEach(v => {
      if (learnedVerbIds.includes(v.id)) {
        onToggleLearned(v.id);
      }
    });
  };

  const dayLearnedCount = dayVerbs.filter(v => learnedVerbIds.includes(v.id)).length;

  return (
    <div className="space-y-6">
      {/* Top Banner / Day Navigation */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Day selection */}
          <div className="flex items-center gap-3">
            <button
              id="prev-day-btn"
              onClick={() => onSelectDay(Math.max(1, currentDay - 1))}
              disabled={currentDay <= 1}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
              title="Ngày trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500">Bài học:</span>
              <select
                id="day-select-dropdown"
                value={currentDay}
                onChange={(e) => {
                  onSelectDay(Number(e.target.value));
                  setFilterType('day');
                }}
                className="font-bold text-base text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl border-none outline-none cursor-pointer"
              >
                {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>
                    Ngày {day} / {TOTAL_DAYS} (5 từ)
                  </option>
                ))}
              </select>
            </div>

            <button
              id="next-day-btn"
              onClick={() => onSelectDay(Math.min(TOTAL_DAYS, currentDay + 1))}
              disabled={currentDay >= TOTAL_DAYS}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
              title="Ngày tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {currentDay !== 1 && (
              <button
                id="back-to-day-1-btn"
                onClick={() => {
                  onSelectDay(1);
                  setFilterType('day');
                }}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
              >
                Về Ngày 1
              </button>
            )}
          </div>

          {/* Quick Audio & Practice buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id="play-day-all-btn"
              onClick={handlePlayAllDayVerbs}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                isPlayingDayAll
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isPlayingDayAll ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Dừng đọc</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Đọc toàn bộ 5 từ ngày này</span>
                </>
              )}
            </button>

            {dayLearnedCount === 5 ? (
              <button
                id="unmark-all-day-btn"
                onClick={handleUnmarkAllDay}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Bỏ đánh dấu</span>
              </button>
            ) : (
              <button
                id="mark-all-day-btn"
                onClick={handleMarkAllDayLearned}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                <span>Đã học cả 5 từ ({dayLearnedCount}/5)</span>
              </button>
            )}

            <button
              id="go-to-day-practice-btn"
              onClick={() => onGoToPractice(currentDay)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
            >
              <span>Luyện tập ngày {currentDay}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Color Legend Rule reminder */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-600">Quy tắc hiển thị:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span className="font-bold text-red-600">Chữ màu đỏ:</span>
              <span className="text-slate-600">Từ đã học thành thạo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
              <span className="font-bold text-slate-900">Chữ màu đen:</span>
              <span className="text-slate-600">Từ chưa học</span>
            </div>
          </div>

          <div className="text-slate-500">
            Ngày {currentDay}: đã học <strong className="text-red-600">{dayLearnedCount}/5 từ</strong>
          </div>
        </div>
      </div>

      {/* Featured Card for Day 1: Word 1 GET (As explicitly emphasized in the prompt!) */}
      {currentDay === 1 && filterType === 'day' && !searchQuery && (
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-5 border border-red-200 shadow-2xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold tracking-wide">
                <Sparkles className="w-3 h-3" />
                <span>TỪ SỐ 1 CỦA NGÀY ĐẦU TIÊN</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                V1: <span className={learnedVerbIds.includes(1) ? 'text-red-600' : 'text-slate-900'}>GET</span> &bull; 
                V2: <span className={learnedVerbIds.includes(1) ? 'text-red-600' : 'text-slate-900'}>GOT</span> &bull; 
                V3: <span className={learnedVerbIds.includes(1) ? 'text-red-600' : 'text-slate-900'}>GOT / GOTTEN</span>
              </h3>
              <p className="text-sm text-slate-700">
                <strong>Nghĩa:</strong> có được, nhận được, lấy được &bull; <strong>Phát âm:</strong> <span className="font-mono text-xs">/ɡet/ - /ɡɒt/ - /ɡɒt/</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="speak-day1-word1-btn"
                onClick={() => handleSpeakVerb(IRREGULAR_VERBS[0])}
                className="p-2.5 rounded-xl bg-white text-red-600 hover:bg-red-50 border border-red-200 shadow-2xs transition-colors"
                title="Nghe phát âm từ GET (Anh - Việt)"
              >
                <Volume2 className="w-5 h-5" />
              </button>

              <button
                id="toggle-day1-word1-btn"
                onClick={() => {
                  playSound('click');
                  onToggleLearned(1);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  learnedVerbIds.includes(1)
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{learnedVerbIds.includes(1) ? 'Đã học (Màu đỏ)' : 'Chưa học (Kiểu đen)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Tabs for Table Scope */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full sm:w-auto text-xs font-semibold">
          <button
            id="filter-day-btn"
            onClick={() => setFilterType('day')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition-colors ${
              filterType === 'day' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5 từ Ngày {currentDay}
          </button>
          <button
            id="filter-all-btn"
            onClick={() => setFilterType('all')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition-colors ${
              filterType === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả 360 từ
          </button>
          <button
            id="filter-learned-btn"
            onClick={() => setFilterType('learned')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition-colors ${
              filterType === 'learned' ? 'bg-white text-red-600 shadow-2xs' : 'text-slate-600 hover:text-red-600'
            }`}
          >
            Đã học (chữ đỏ)
          </button>
          <button
            id="filter-unlearned-btn"
            onClick={() => setFilterType('unlearned')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg transition-colors ${
              filterType === 'unlearned' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Chưa học (chữ đen)
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="vocab-search-input"
            type="text"
            placeholder="Tìm theo V1, V2, V3 hoặc nghĩa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Vocabulary Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 w-16 text-center">STT</th>
                <th className="py-3.5 px-4">Nguyên mẫu (V1)</th>
                <th className="py-3.5 px-4">Quá khứ (V2)</th>
                <th className="py-3.5 px-4">Quá khứ phân từ (V3)</th>
                <th className="py-3.5 px-4 min-w-[200px]">Nghĩa tiếng Việt</th>
                <th className="py-3.5 px-4 min-w-[170px]">Phát âm (IPA)</th>
                <th className="py-3.5 px-4 text-center w-28">Âm thanh</th>
                <th className="py-3.5 px-4 text-center w-36">Kiểm soát</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {displayedVerbs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500 text-xs">
                    <Info className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                    Không tìm thấy từ nào phù hợp với bộ lọc hiện tại.
                  </td>
                </tr>
              ) : (
                displayedVerbs.map((verb, idx) => {
                  const isLearned = learnedVerbIds.includes(verb.id);
                  const isSpeaking = speakingId === verb.id;
                  
                  // In accordance with prompt:
                  // "có kiểm soát từ nào học rồi thì đổi thành màu đỏ từ nào chưa học thì kiểu chữ đen"
                  const verbTextColor = isLearned ? 'text-red-600 font-bold' : 'text-slate-900 font-semibold';
                  const rowBg = isLearned ? 'bg-red-50/25 hover:bg-red-50/50' : 'hover:bg-slate-50/80';

                  return (
                    <tr
                      key={verb.id}
                      id={`verb-row-${verb.id}`}
                      className={`transition-colors ${rowBg}`}
                    >
                      {/* STT */}
                      <td className="py-3.5 px-4 text-center text-xs font-mono">
                        <span className="text-slate-400">
                          #{verb.id}
                        </span>
                        {filterType === 'day' && (
                          <div className="text-[10px] text-slate-500 font-serif">
                            Từ {idx + 1}/5
                          </div>
                        )}
                      </td>

                      {/* V1 */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <span
                            onClick={() => handleSpeakEnglishWord(verb.v1)}
                            className={`${verbTextColor} uppercase text-base tracking-wide cursor-pointer hover:underline`}
                            title="Bấm để nghe phát âm V1"
                          >
                            {verb.v1}
                          </span>
                        </div>
                      </td>

                      {/* V2 */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span
                            onClick={() => handleSpeakEnglishWord(verb.v2)}
                            className={`${verbTextColor} uppercase cursor-pointer hover:underline`}
                            title="Bấm để nghe phát âm V2"
                          >
                            {verb.v2}
                          </span>
                          {verb.v2_alt && verb.v2_alt.length > 0 && (
                            <span className="text-xs text-slate-400 font-mono">
                              / {verb.v2_alt.join(', ')}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* V3 */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span
                            onClick={() => handleSpeakEnglishWord(verb.v3)}
                            className={`${verbTextColor} uppercase cursor-pointer hover:underline`}
                            title="Bấm để nghe phát âm V3"
                          >
                            {verb.v3}
                          </span>
                          {verb.v3_alt && verb.v3_alt.length > 0 && (
                            <span className="text-xs text-slate-400 font-mono">
                              / {verb.v3_alt.join(', ')}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Meaning */}
                      <td className="py-3.5 px-4">
                        <span
                          onClick={() => handleSpeakVietnamese(verb.meaning)}
                          className="text-slate-800 text-xs sm:text-sm cursor-pointer hover:text-red-700 transition-colors"
                          title="Bấm để nghe đọc nghĩa tiếng Việt"
                        >
                          {verb.meaning}
                        </span>
                      </td>

                      {/* IPA Pronunciation */}
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-500">
                        {verb.ipa}
                      </td>

                      {/* Audio Controls (English & Vietnamese) */}
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-1">
                          <button
                            id={`speak-full-btn-${verb.id}`}
                            onClick={() => handleSpeakVerb(verb)}
                            className={`p-2 rounded-lg transition-colors ${
                              isSpeaking
                                ? 'bg-red-600 text-white animate-pulse'
                                : 'bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600'
                            }`}
                            title="Đọc Anh - Việt (V1, V2, V3 + Nghĩa)"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>

                      {/* Learned toggle button */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          id={`toggle-learned-${verb.id}`}
                          onClick={() => {
                            playSound('click');
                            onToggleLearned(verb.id);
                          }}
                          className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            isLearned
                              ? 'bg-red-600 text-white shadow-2xs hover:bg-red-700'
                              : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
                          }`}
                          title={isLearned ? 'Đang là chữ đỏ (đã học) - Bấm để chuyển về đen' : 'Đang là chữ đen (chưa học) - Bấm để chuyển sang đỏ'}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{isLearned ? 'Đã học (Đỏ)' : 'Chưa học (Đen)'}</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>
            Hiển thị <strong>{displayedVerbs.length}</strong> / <strong>{TOTAL_VERBS}</strong> động từ
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Đã học: <strong className="text-red-600">{learnedVerbIds.length}</strong>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-800"></span>
              Chưa học: <strong className="text-slate-800">{TOTAL_VERBS - learnedVerbIds.length}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
