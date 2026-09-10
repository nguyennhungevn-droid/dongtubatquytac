import React from 'react';
import { BookOpen, Dumbbell, Timer, Trophy, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { TOTAL_VERBS } from '../data/verbsData';

interface HeaderProps {
  activeTab: 'vocab' | 'practice' | 'quiz' | 'history';
  onSelectTab: (tab: 'vocab' | 'practice' | 'quiz' | 'history') => void;
  learnedCount: number;
  viewedCount: number;
  currentDay: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  learnedCount,
  viewedCount,
  currentDay,
}) => {
  const percentLearned = Math.round((learnedCount / TOTAL_VERBS) * 100);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm ring-4 ring-red-50">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                  Học Động Từ Bất Quy Tắc
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold">
                  5 từ / ngày
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Chương trình chuẩn 360 động từ &bull; Ngày hiện tại: <span className="font-semibold text-slate-800">Ngày {currentDay}</span>
              </p>
            </div>
          </div>

          {/* Quick Learning Stats */}
          <div className="flex items-center gap-2 sm:gap-4 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-red-600" />
              <div>
                <span className="text-slate-500">Đã học (đỏ): </span>
                <span className="font-bold text-red-600">{learnedCount}</span>
                <span className="text-slate-400">/{TOTAL_VERBS}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-lg border border-slate-200 shadow-2xs">
              <Eye className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-slate-500">Đã xem: </span>
                <span className="font-bold text-slate-800">{viewedCount}</span>
                <span className="text-slate-400">/{TOTAL_VERBS}</span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col min-w-[90px] text-right pr-1">
              <div className="flex justify-between items-center text-[11px] text-slate-500 mb-1">
                <span>Tiến độ</span>
                <span className="font-semibold text-slate-700">{percentLearned}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-red-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentLearned}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-3 pt-1 border-t border-slate-100 no-scrollbar">
          <button
            id="tab-vocab"
            onClick={() => onSelectTab('vocab')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === 'vocab'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Bảng Từ Vựng (5 từ/ngày)</span>
          </button>

          <button
            id="tab-practice"
            onClick={() => onSelectTab('practice')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === 'practice'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Luyện Tập Điền & Sắp Chữ</span>
          </button>

          <button
            id="tab-quiz"
            onClick={() => onSelectTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === 'quiz'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>Trắc Nghiệm Tính Giờ</span>
          </button>

          <button
            id="tab-history"
            onClick={() => onSelectTab('history')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === 'history'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Bảng Điểm & Lịch Sử</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
