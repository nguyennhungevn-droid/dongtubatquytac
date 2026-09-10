import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Shuffle,
  CheckCircle2,
  XCircle,
  Volume2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Eye,
  EyeOff,
  HelpCircle,
  Keyboard,
  Puzzle,
  Lightbulb
} from 'lucide-react';
import { IrregularVerb } from '../types';
import { IRREGULAR_VERBS, TOTAL_DAYS, getVerbsByDay } from '../data/verbsData';
import { speakEnglish, speakVerbAll } from '../utils/speech';
import { playSound, markVerbViewed } from '../utils/storage';

interface PracticeViewProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  learnedVerbIds: number[];
  viewedVerbIds: number[];
  onToggleLearned: (id: number) => void;
  onMarkViewed: (id: number) => void;
}

type ScopeType = 'day1' | 'currentDay' | 'all' | 'unseen' | 'seen' | 'unlearned' | 'learned';
type PracticeMode = 'fill' | 'scramble';

export const PracticeView: React.FC<PracticeViewProps> = ({
  currentDay,
  onSelectDay,
  learnedVerbIds,
  viewedVerbIds,
  onToggleLearned,
  onMarkViewed,
}) => {
  const [scope, setScope] = useState<ScopeType>('day1');
  const [mode, setMode] = useState<PracticeMode>('fill');

  // Current active verb for practice
  const [currentVerb, setCurrentVerb] = useState<IrregularVerb>(IRREGULAR_VERBS[0]);

  // Mode: Fill in state
  const [inputV2, setInputV2] = useState('');
  const [inputV3, setInputV3] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isV2Correct, setIsV2Correct] = useState<boolean | null>(null);
  const [isV3Correct, setIsV3Correct] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Mode: Scramble state
  // Scramble letters for V2 and V3
  const [scrambleTarget, setScrambleTarget] = useState<'v2' | 'v3'>('v2');
  const [availableTiles, setAvailableTiles] = useState<{ id: string; char: string }[]>([]);
  const [placedTiles, setPlacedTiles] = useState<{ id: string; char: string }[]>([]);
  const [scrambleStatus, setScrambleStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Filter pool of candidate verbs
  const candidateVerbs = useMemo(() => {
    switch (scope) {
      case 'day1':
        return getVerbsByDay(1);
      case 'currentDay':
        return getVerbsByDay(currentDay);
      case 'unseen':
        return IRREGULAR_VERBS.filter(v => !viewedVerbIds.includes(v.id));
      case 'seen':
        return IRREGULAR_VERBS.filter(v => viewedVerbIds.includes(v.id));
      case 'unlearned':
        return IRREGULAR_VERBS.filter(v => !learnedVerbIds.includes(v.id));
      case 'learned':
        return IRREGULAR_VERBS.filter(v => learnedVerbIds.includes(v.id));
      case 'all':
      default:
        return IRREGULAR_VERBS;
    }
  }, [scope, currentDay, viewedVerbIds, learnedVerbIds]);

  // Prepare scrambled tiles
  const initScramble = useCallback((targetWord: string) => {
    const cleanWord = targetWord.split('/')[0].trim().toLowerCase();
    const chars = cleanWord.split('');
    // Fisher-Yates shuffle
    const tiles = chars.map((c, i) => ({ id: `${c}-${i}-${Math.random()}`, char: c }));
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    setAvailableTiles(tiles);
    setPlacedTiles([]);
    setScrambleStatus('idle');
  }, []);

  // Pick a random verb from candidate pool
  const pickNextVerb = useCallback((forcedVerb?: IrregularVerb) => {
    let next: IrregularVerb;
    if (forcedVerb) {
      next = forcedVerb;
    } else {
      const pool = candidateVerbs.length > 0 ? candidateVerbs : IRREGULAR_VERBS;
      // pick one different from current if possible
      const filtered = pool.filter(v => v.id !== currentVerb?.id);
      const chosenPool = filtered.length > 0 ? filtered : pool;
      const randIndex = Math.floor(Math.random() * chosenPool.length);
      next = chosenPool[randIndex];
    }

    setCurrentVerb(next);
    setInputV2('');
    setInputV3('');
    setSubmitted(false);
    setIsV2Correct(null);
    setIsV3Correct(null);
    setShowHint(false);

    // Mark as viewed in tracking
    markVerbViewed(next.id);
    onMarkViewed(next.id);

    // Init scramble if in scramble mode
    if (mode === 'scramble') {
      const targetWord = scrambleTarget === 'v2' ? next.v2 : next.v3;
      initScramble(targetWord);
    }
  }, [candidateVerbs, currentVerb, onMarkViewed, mode, scrambleTarget, initScramble]);

  // Initial load
  useEffect(() => {
    if (scope === 'day1') {
      // Prompt requirement: "Hiện 1 động từ bất kỳ của ngày 1" -> Day 1 verbs
      pickNextVerb(IRREGULAR_VERBS[0]);
    } else {
      pickNextVerb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);

  // Re-init scramble when changing target or verb or mode
  useEffect(() => {
    if (mode === 'scramble' && currentVerb) {
      const targetWord = scrambleTarget === 'v2' ? currentVerb.v2 : currentVerb.v3;
      initScramble(targetWord);
    }
  }, [mode, scrambleTarget, currentVerb, initScramble]);

  // Check fill-in answer
  const handleCheckFillIn = () => {
    if (!currentVerb) return;

    const cleanInputV2 = inputV2.trim().toLowerCase();
    const cleanInputV3 = inputV3.trim().toLowerCase();

    const validV2List = [currentVerb.v2.toLowerCase(), ...(currentVerb.v2_alt || []).map(s => s.toLowerCase())];
    const validV3List = [currentVerb.v3.toLowerCase(), ...(currentVerb.v3_alt || []).map(s => s.toLowerCase())];

    const isV2Ok = validV2List.some(ans => ans === cleanInputV2);
    const isV3Ok = validV3List.some(ans => ans === cleanInputV3);

    setIsV2Correct(isV2Ok);
    setIsV3Correct(isV3Ok);
    setSubmitted(true);

    if (isV2Ok && isV3Ok) {
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  // Scramble tile placement
  const handlePlaceTile = (tile: { id: string; char: string }) => {
    playSound('click');
    setAvailableTiles(prev => prev.filter(t => t.id !== tile.id));
    const nextPlaced = [...placedTiles, tile];
    setPlacedTiles(nextPlaced);

    // Check if word completed
    const targetWord = (scrambleTarget === 'v2' ? currentVerb.v2 : currentVerb.v3).split('/')[0].trim().toLowerCase();
    if (nextPlaced.length === targetWord.length) {
      const formedWord = nextPlaced.map(t => t.char).join('').toLowerCase();
      if (formedWord === targetWord) {
        setScrambleStatus('correct');
        playSound('correct');
      } else {
        setScrambleStatus('wrong');
        playSound('wrong');
      }
    }
  };

  const handleRemovePlacedTile = (tile: { id: string; char: string }) => {
    playSound('click');
    setPlacedTiles(prev => prev.filter(t => t.id !== tile.id));
    setAvailableTiles(prev => [...prev, tile]);
    setScrambleStatus('idle');
  };

  const isLearned = currentVerb ? learnedVerbIds.includes(currentVerb.id) : false;
  const isViewed = currentVerb ? viewedVerbIds.includes(currentVerb.id) : false;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Scope and Filter Selector */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-red-600" />
              Luyện Tập Động Từ Bất Quy Tắc
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn từ ngẫu nhiên có kiểm soát từ đã xem qua & chưa xem qua &bull; Điền 2 khung V2/V3 hoặc sắp chữ
            </p>
          </div>

          {/* Mode Switch: Điền 2 khung V2, V3 hoặc Sắp chữ */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              id="mode-fill-btn"
              onClick={() => {
                setMode('fill');
                playSound('click');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                mode === 'fill' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5 text-red-600" />
              <span>Điền 2 khung V2, V3</span>
            </button>
            <button
              id="mode-scramble-btn"
              onClick={() => {
                setMode('scramble');
                playSound('click');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                mode === 'scramble' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Puzzle className="w-3.5 h-3.5 text-red-600" />
              <span>Sắp chữ (Scramble)</span>
            </button>
          </div>
        </div>

        {/* Scope Selection Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-600 mr-1">Phạm vi từ:</span>
          
          <button
            id="scope-day1-btn"
            onClick={() => setScope('day1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'day1'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Động từ Ngày 1 (Mặc định)
          </button>

          <button
            id="scope-current-day-btn"
            onClick={() => setScope('currentDay')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'currentDay'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ngày {currentDay} ({getVerbsByDay(currentDay).length} từ)
          </button>

          <button
            id="scope-unseen-btn"
            onClick={() => setScope('unseen')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'unseen'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>Từ CHƯA xem ({IRREGULAR_VERBS.length - viewedVerbIds.length})</span>
          </button>

          <button
            id="scope-seen-btn"
            onClick={() => setScope('seen')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'seen'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Từ ĐÃ xem ({viewedVerbIds.length})</span>
          </button>

          <button
            id="scope-unlearned-btn"
            onClick={() => setScope('unlearned')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'unlearned'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Chưa học (chữ đen: {IRREGULAR_VERBS.length - learnedVerbIds.length})
          </button>

          <button
            id="scope-all-btn"
            onClick={() => setScope('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              scope === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Tất cả 360 từ
          </button>
        </div>
      </div>

      {/* Main Practice Interactive Card */}
      {currentVerb && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Header of the verb */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  Ngày {currentVerb.day} &bull; Từ #{currentVerb.id}
                </span>

                {/* Viewed control badge */}
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                    isViewed
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>{isViewed ? 'Đã xem qua' : 'Chưa xem qua'}</span>
                </span>

                {/* Learned control badge (Color control: red = learned, black = unlearned) */}
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                    isLearned
                      ? 'bg-red-100 text-red-700 border border-red-200'
                      : 'bg-slate-100 text-slate-900'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isLearned ? 'bg-red-600' : 'bg-slate-900'}`} />
                  <span>{isLearned ? 'Đã học (chữ màu đỏ)' : 'Chưa học (chữ màu đen)'}</span>
                </span>
              </div>

              {/* V1 Display */}
              <div className="flex items-center gap-3">
                <h3
                  className={`text-3xl sm:text-4xl font-black uppercase tracking-wide ${
                    isLearned ? 'text-red-600' : 'text-slate-900'
                  }`}
                >
                  V1: {currentVerb.v1}
                </h3>

                <button
                  id="speak-practice-verb-btn"
                  onClick={() => speakVerbAll(currentVerb.v1, currentVerb.v2, currentVerb.v3, currentVerb.meaning)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 transition-colors"
                  title="Nghe phát âm toàn bộ Anh - Việt"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm font-medium text-slate-600 mt-1">
                <strong>Nghĩa tiếng Việt:</strong> {currentVerb.meaning} &bull;{' '}
                <span className="font-mono text-xs text-slate-500">{currentVerb.ipa}</span>
              </p>
            </div>

            {/* Quick Action to toggle learned state right here */}
            <div className="flex flex-col sm:items-end gap-2">
              <button
                id="toggle-practice-learned-btn"
                onClick={() => {
                  playSound('click');
                  onToggleLearned(currentVerb.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                  isLearned
                    ? 'bg-red-600 text-white shadow-2xs hover:bg-red-700'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isLearned ? 'Đã học (Chữ đỏ)' : 'Đánh dấu đã học (Đổi sang đỏ)'}</span>
              </button>
            </div>
          </div>

          {/* MODE 1: FILL IN 2 FRAMES (V2 & V3) */}
          {mode === 'fill' && (
            <div className="space-y-6">
              <p className="text-sm font-semibold text-slate-700">
                Hãy điền dạng Quá khứ (V2) và Quá khứ phân từ (V3) vào 2 khung bên dưới:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Khung V2 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
                    <span>Khung 1: Dạng Quá khứ (V2)</span>
                    {submitted && (
                      <span className={isV2Correct ? 'text-green-600 flex items-center gap-1' : 'text-red-600 flex items-center gap-1'}>
                        {isV2Correct ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isV2Correct ? 'ĐÚNG' : 'CHƯA ĐÚNG'}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="practice-input-v2"
                      type="text"
                      autoFocus
                      placeholder="Nhập V2..."
                      value={inputV2}
                      onChange={(e) => {
                        setInputV2(e.target.value);
                        setSubmitted(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCheckFillIn();
                      }}
                      className={`w-full px-4 py-3.5 text-base font-bold uppercase rounded-xl border-2 transition-all outline-none ${
                        submitted
                          ? isV2Correct
                            ? 'border-green-500 bg-green-50/40 text-green-900'
                            : 'border-red-500 bg-red-50/40 text-red-900'
                          : 'border-slate-300 focus:border-red-500 bg-slate-50 focus:bg-white text-slate-900'
                      }`}
                    />
                    {submitted && !isV2Correct && (
                      <div className="mt-1.5 text-xs text-red-600 font-medium">
                        Đáp án đúng: <strong className="uppercase font-bold">{currentVerb.v2}</strong>
                        {currentVerb.v2_alt && currentVerb.v2_alt.length > 0 && ` (hoặc ${currentVerb.v2_alt.join(', ')})`}
                      </div>
                    )}
                  </div>
                </div>

                {/* Khung V3 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
                    <span>Khung 2: Quá khứ phân từ (V3)</span>
                    {submitted && (
                      <span className={isV3Correct ? 'text-green-600 flex items-center gap-1' : 'text-red-600 flex items-center gap-1'}>
                        {isV3Correct ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isV3Correct ? 'ĐÚNG' : 'CHƯA ĐÚNG'}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="practice-input-v3"
                      type="text"
                      placeholder="Nhập V3..."
                      value={inputV3}
                      onChange={(e) => {
                        setInputV3(e.target.value);
                        setSubmitted(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCheckFillIn();
                      }}
                      className={`w-full px-4 py-3.5 text-base font-bold uppercase rounded-xl border-2 transition-all outline-none ${
                        submitted
                          ? isV3Correct
                            ? 'border-green-500 bg-green-50/40 text-green-900'
                            : 'border-red-500 bg-red-50/40 text-red-900'
                          : 'border-slate-300 focus:border-red-500 bg-slate-50 focus:bg-white text-slate-900'
                      }`}
                    />
                    {submitted && !isV3Correct && (
                      <div className="mt-1.5 text-xs text-red-600 font-medium">
                        Đáp án đúng: <strong className="uppercase font-bold">{currentVerb.v3}</strong>
                        {currentVerb.v3_alt && currentVerb.v3_alt.length > 0 && ` (hoặc ${currentVerb.v3_alt.join(', ')})`}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons for Fill-In */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    id="check-fill-in-btn"
                    onClick={handleCheckFillIn}
                    className="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors shadow-2xs"
                  >
                    Kiểm tra đáp án
                  </button>

                  <button
                    id="show-hint-btn"
                    onClick={() => setShowHint(!showHint)}
                    className="px-3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý ký tự'}</span>
                  </button>
                </div>

                <button
                  id="next-random-verb-btn"
                  onClick={() => pickNextVerb()}
                  className="px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <span>Từ ngẫu nhiên tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hint Box */}
              {showHint && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Gợi ý: V2 bắt đầu bằng chữ <strong>"{currentVerb.v2.charAt(0).toUpperCase()}"</strong> ({currentVerb.v2.length} ký tự), 
                    V3 bắt đầu bằng chữ <strong>"{currentVerb.v3.charAt(0).toUpperCase()}"</strong> ({currentVerb.v3.length} ký tự).
                  </span>
                </div>
              )}
            </div>
          )}

          {/* MODE 2: SCRAMBLE / SẮP CHỮ */}
          {mode === 'scramble' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  Bấm vào các ô chữ cái bên dưới để ghép thành từ đúng:
                </p>

                {/* Target selector: V2 or V3 */}
                <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold">
                  <button
                    id="scramble-target-v2-btn"
                    onClick={() => setScrambleTarget('v2')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      scrambleTarget === 'v2' ? 'bg-white text-red-600 shadow-2xs' : 'text-slate-600'
                    }`}
                  >
                    Sắp chữ dạng V2
                  </button>
                  <button
                    id="scramble-target-v3-btn"
                    onClick={() => setScrambleTarget('v3')}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      scrambleTarget === 'v3' ? 'bg-white text-red-600 shadow-2xs' : 'text-slate-600'
                    }`}
                  >
                    Sắp chữ dạng V3
                  </button>
                </div>
              </div>

              {/* Target Placed Slots */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 min-h-[120px]">
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {placedTiles.map((tile) => (
                    <button
                      key={tile.id}
                      onClick={() => handleRemovePlacedTile(tile)}
                      className="w-11 h-12 rounded-xl bg-white border-2 border-red-500 shadow-xs flex items-center justify-center text-lg font-black text-slate-900 uppercase hover:bg-red-50 transition-all cursor-pointer"
                      title="Bấm để trả về"
                    >
                      {tile.char}
                    </button>
                  ))}

                  {/* Empty placeholder slots */}
                  {Array.from({
                    length: Math.max(
                      0,
                      (scrambleTarget === 'v2' ? currentVerb.v2 : currentVerb.v3).split('/')[0].trim().length -
                        placedTiles.length
                    ),
                  }).map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="w-11 h-12 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-300"
                    >
                      _
                    </div>
                  ))}
                </div>

                {/* Status Message */}
                {scrambleStatus === 'correct' && (
                  <div className="mt-4 flex items-center gap-1.5 text-green-700 font-bold text-sm bg-green-100 px-3.5 py-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Chính xác tuyệt vời!</span>
                  </div>
                )}
                {scrambleStatus === 'wrong' && (
                  <div className="mt-4 flex items-center gap-1.5 text-red-700 font-bold text-sm bg-red-100 px-3.5 py-1.5 rounded-full">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Chưa đúng, thử sắp lại hoặc bấm Đặt lại nhé!</span>
                  </div>
                )}
              </div>

              {/* Available Tile Pool */}
              <div className="space-y-2 text-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Chữ cái khả dụng (Bấm để đưa lên):
                </span>
                <div className="flex flex-wrap gap-2 justify-center pt-1 min-h-[50px]">
                  {availableTiles.map((tile) => (
                    <button
                      key={tile.id}
                      onClick={() => handlePlaceTile(tile)}
                      className="w-11 h-12 rounded-xl bg-slate-900 text-white font-black text-lg uppercase shadow-xs hover:bg-red-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      {tile.char}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scramble Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  id="reset-scramble-btn"
                  onClick={() => {
                    const targetWord = scrambleTarget === 'v2' ? currentVerb.v2 : currentVerb.v3;
                    initScramble(targetWord);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xáo trộn lại</span>
                </button>

                <button
                  id="next-scramble-verb-btn"
                  onClick={() => pickNextVerb()}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <span>Từ ngẫu nhiên tiếp theo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
