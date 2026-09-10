/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { VocabularyTable } from './components/VocabularyTable';
import { PracticeView } from './components/PracticeView';
import { QuizView } from './components/QuizView';
import { ScoreHistoryView } from './components/ScoreHistoryView';
import {
  getLearnedVerbIds,
  saveLearnedVerbIds,
  toggleLearnedVerbId,
  getViewedVerbIds,
  markVerbViewed,
  getSavedCurrentDay,
  saveCurrentDay,
  getQuizHistory,
} from './utils/storage';
import { TOTAL_DAYS } from './data/verbsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'vocab' | 'practice' | 'quiz' | 'history'>('vocab');
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [learnedVerbIds, setLearnedVerbIds] = useState<number[]>([]);
  const [viewedVerbIds, setViewedVerbIds] = useState<number[]>([]);
  const [quizHistory, setQuizHistory] = useState(getQuizHistory());

  // Initialize from storage
  useEffect(() => {
    setCurrentDay(getSavedCurrentDay());
    setLearnedVerbIds(getLearnedVerbIds());
    setViewedVerbIds(getViewedVerbIds());
    setQuizHistory(getQuizHistory());
  }, []);

  const handleSelectDay = (day: number) => {
    setCurrentDay(day);
    saveCurrentDay(day);
  };

  const handleToggleLearned = (id: number) => {
    toggleLearnedVerbId(id);
    setLearnedVerbIds(getLearnedVerbIds());
  };

  const handleMarkViewed = (id: number) => {
    markVerbViewed(id);
    setViewedVerbIds(getViewedVerbIds());
  };

  const handleGoToPractice = (day: number) => {
    setCurrentDay(day);
    saveCurrentDay(day);
    setActiveTab('practice');
  };

  const handleRefreshHistory = () => {
    setQuizHistory(getQuizHistory());
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-serif selection:bg-red-500 selection:text-white">
      {/* App Header & Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'history') {
            handleRefreshHistory();
          }
          setActiveTab(tab);
        }}
        learnedCount={learnedVerbIds.length}
        viewedCount={viewedVerbIds.length}
        currentDay={currentDay}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'vocab' && (
          <VocabularyTable
            currentDay={currentDay}
            onSelectDay={handleSelectDay}
            learnedVerbIds={learnedVerbIds}
            onToggleLearned={handleToggleLearned}
            onGoToPractice={handleGoToPractice}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeView
            currentDay={currentDay}
            onSelectDay={handleSelectDay}
            learnedVerbIds={learnedVerbIds}
            viewedVerbIds={viewedVerbIds}
            onToggleLearned={handleToggleLearned}
            onMarkViewed={handleMarkViewed}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizView
            currentDay={currentDay}
            learnedVerbIds={learnedVerbIds}
            onViewHistory={() => {
              handleRefreshHistory();
              setActiveTab('history');
            }}
          />
        )}

        {activeTab === 'history' && (
          <ScoreHistoryView
            history={quizHistory}
            onRefreshHistory={handleRefreshHistory}
            onStartNewQuiz={() => setActiveTab('quiz')}
          />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Học 5 động từ bất quy tắc mỗi ngày &bull; 72 ngày hoàn thành trọn bộ 360 từ
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Từ học rồi: <strong className="text-red-600 font-semibold">Chữ màu đỏ</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              Từ chưa học: <strong className="text-slate-900 font-semibold">Chữ màu đen</strong>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
