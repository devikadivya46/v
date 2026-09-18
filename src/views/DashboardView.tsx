import React from 'react';
import { Sparkles, Calendar, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { TextReveal } from '../components/ui/text-reveal';
import { StatCards } from '../components/StatCards';
import { RecentResults } from '../components/RecentResults';
import { ScoreTrend } from '../components/ScoreTrend';
import { TestResultItem, ScoreTrendPoint, TimeframeType } from '../types';

interface DashboardViewProps {
  isDemoData: boolean;
  completedTestsCount: number;
  averageScore: number;
  currentStreak: number;
  globalRank: string;
  recentResults: TestResultItem[];
  trendData: ScoreTrendPoint[];
  timeframe: TimeframeType;
  setTimeframe: (tf: TimeframeType) => void;
  onOpenQuickTest: () => void;
  onViewAllResults: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  isDemoData,
  completedTestsCount,
  averageScore,
  currentStreak,
  globalRank,
  recentResults,
  trendData,
  timeframe,
  setTimeframe,
  onOpenQuickTest,
  onViewAllResults,
}) => {
  return (
    <div className="space-y-6 animate-fade-in pb-28">
      {/* Welcome Greeting Banner (Clean Minimalist Redesign of original banner) */}
      <div className="relative bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Target: National Entrance & Technical Assessment 2026</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <TextReveal text="Good evening, Devika" delay={0.05} stagger={0.07} />
              <span className="text-2xl animate-bounce">👋</span>
            </h1>

            <TextReveal
              text="Keep going! Every attempt moves you closer to your goals. You have 3 upcoming assignments scheduled this week."
              delay={0.35}
              stagger={0.02}
              as="p"
              className="text-sm text-slate-600 leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              id="dashboard-start-practice-btn"
              onClick={onOpenQuickTest}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 shadow-md shadow-slate-900/10 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Take Diagnostic Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <StatCards
        isDemoData={isDemoData}
        completedTestsCount={completedTestsCount}
        averageScore={averageScore}
        currentStreak={currentStreak}
        globalRank={globalRank}
        onOpenQuickTest={onOpenQuickTest}
      />

      {/* Grid for Recent Results & Score Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Recent Results */}
        <RecentResults
          results={recentResults}
          onOpenQuickTest={onOpenQuickTest}
          onViewAllResults={onViewAllResults}
        />

        {/* Right: Score Trend */}
        <ScoreTrend
          trendData={trendData}
          timeframe={timeframe}
          setTimeframe={setTimeframe}
          hasTests={completedTestsCount > 0}
          onOpenQuickTest={onOpenQuickTest}
        />
      </div>
    </div>
  );
};
