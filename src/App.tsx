/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, TimeframeType, TestResultItem } from './types';
import { DEMO_RECENT_RESULTS, DEMO_SCORE_TREND, ASSIGNED_TESTS } from './data/mockData';
import { OriginalPage } from './components/OriginalPage';
import { TopHeader } from './components/TopHeader';
import { BottomNav } from './components/BottomNav';
import { DashboardView } from './views/DashboardView';
import { TestsView } from './views/TestsView';
import { PracticeView } from './views/PracticeView';
import { AnalyticsView } from './views/AnalyticsView';
import { ProfileView } from './views/ProfileView';
import { QuickTestModal } from './components/QuickTestModal';
import { SearchModal } from './components/SearchModal';
import { SlidebarDock } from './components/SlidebarDock';
import { Sparkles, LayoutTemplate } from 'lucide-react';

export default function App() {
  // 'original' matches the user's uploaded screenshots exactly.
  // 'redesigned' provides the modern minimalist aesthetic with bottom navigation.
  const [viewMode, setViewMode] = useState<'original' | 'redesigned'>('original');

  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isDemoData, setIsDemoData] = useState<boolean>(false);
  const [timeframe, setTimeframe] = useState<TimeframeType>('last_7');
  
  // Modals
  const [isQuickTestOpen, setIsQuickTestOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // State for test results
  const [resultsList, setResultsList] = useState<TestResultItem[]>([]);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentResults = isDemoData ? DEMO_RECENT_RESULTS : resultsList;
  const completedTestsCount = currentResults.length;
  
  const averageScore = completedTestsCount > 0
    ? Math.round(currentResults.reduce((acc, r) => acc + r.scorePercent, 0) / completedTestsCount)
    : 0;

  const currentStreak = isDemoData ? 5 : (resultsList.length > 0 ? 1 : 0);
  const globalRank = isDemoData ? '#14' : '—';
  const trendData = isDemoData ? DEMO_SCORE_TREND[timeframe] : [];

  const handleCompleteTest = (newResult: TestResultItem) => {
    setResultsList((prev) => [newResult, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#f3f6fa] text-slate-800 font-sans relative">
      {/* View Mode Switcher floating pill with subtle neumorphic shadow */}
      <div className="fixed top-20 right-4 z-50 bg-[#f8fafc]/95 backdrop-blur-md border border-white/80 shadow-[4px_4px_14px_rgba(160,175,200,0.28),-4px_-4px_12px_rgba(255,255,255,0.95)] rounded-full p-1 flex items-center gap-1">
        <button
          id="toggle-original-view-btn"
          onClick={() => setViewMode('original')}
          className={`px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
            viewMode === 'original'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Original Page (Exact Match)</span>
        </button>

        <button
          id="toggle-redesigned-view-btn"
          onClick={() => setViewMode('redesigned')}
          className={`px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
            viewMode === 'redesigned'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Redesigned (Bottom Nav)</span>
        </button>
      </div>

      {viewMode === 'original' ? (
        /* EXACT REPLICATION OF SCREENSHOTS 1, 2, 3 */
        <OriginalPage
          onTakeTest={() => setIsQuickTestOpen(true)}
          onTakeInterview={() => setIsQuickTestOpen(true)}
          onAssignmentsClick={() => setIsSearchOpen(true)}
          completedTestsCount={completedTestsCount}
          averageScore={averageScore}
          currentStreak={currentStreak}
          globalRank={globalRank}
          isDemoData={isDemoData}
        />
      ) : (
        /* MODERN MINIMALIST WITH INTUITIVE BOTTOM NAVIGATION */
        <div className="min-h-screen bg-slate-50/60 flex flex-col">
          <TopHeader
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenQuickTest={() => setIsQuickTestOpen(true)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isDemoData={isDemoData}
            setIsDemoData={setIsDemoData}
            pendingAssignmentsCount={ASSIGNED_TESTS.length}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12">
            {activeTab === 'dashboard' && (
              <DashboardView
                isDemoData={isDemoData}
                completedTestsCount={completedTestsCount}
                averageScore={averageScore}
                currentStreak={currentStreak}
                globalRank={globalRank}
                recentResults={currentResults}
                trendData={trendData}
                timeframe={timeframe}
                setTimeframe={setTimeframe}
                onOpenQuickTest={() => setIsQuickTestOpen(true)}
                onViewAllResults={() => setActiveTab('tests')}
              />
            )}

            {activeTab === 'tests' && (
              <TestsView
                onOpenQuickTest={() => setIsQuickTestOpen(true)}
                recentResults={currentResults}
              />
            )}

            {activeTab === 'practice' && (
              <PracticeView
                onOpenQuickTest={() => setIsQuickTestOpen(true)}
              />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsView
                trendData={trendData}
                averageScore={averageScore}
                completedCount={completedTestsCount}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileView
                completedCount={completedTestsCount}
                currentStreak={currentStreak}
              />
            )}
          </main>

          {/* Interactive Slidebar Magnification Dock matching uploaded reference */}
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
            <SlidebarDock
              activeNav={
                activeTab === 'dashboard'
                  ? 'Dashboard'
                  : activeTab === 'tests'
                  ? 'My Tests'
                  : activeTab === 'practice'
                  ? 'Practice'
                  : activeTab === 'analytics'
                  ? 'Analytics'
                  : 'Dashboard'
              }
              onNavigate={(nav) => {
                if (nav === 'Dashboard') setActiveTab('dashboard');
                else if (nav === 'My Tests') setActiveTab('tests');
                else if (nav === 'Practice') setActiveTab('practice');
                else if (nav === 'Analytics') setActiveTab('analytics');
                else if (nav === 'Results') setActiveTab('tests');
              }}
            />
          </div>
        </div>
      )}

      {/* Interactive Quick Diagnostic Test Modal */}
      <QuickTestModal
        isOpen={isQuickTestOpen}
        onClose={() => setIsQuickTestOpen(false)}
        onCompleteTest={handleCompleteTest}
      />

      {/* Search & Topic Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTest={() => {
          setIsQuickTestOpen(true);
        }}
      />
    </div>
  );
}


