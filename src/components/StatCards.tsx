import React, { useState } from 'react';
import { 
  BarChart2, 
  ArrowRight, 
  X, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  Trophy, 
  Flame, 
  Target, 
  TrendingUp, 
  Award,
  ChevronRight,
  Clock,
  RotateCcw
} from 'lucide-react';
import {
  Clipboard3DIllustration,
  ArcheryTarget3DIllustration,
  StreakFlame3DIllustration,
  TrophyGold3DIllustration,
  CalendarFlame3DIllustration,
  PodiumTrophy3DIllustration
} from './Stat3DIllustrations';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface StatCardsProps {
  isDemoData?: boolean;
  completedTestsCount?: number;
  averageScore?: number;
  currentStreak?: number;
  globalRank?: string;
  onOpenQuickTest?: () => void;
}

type ModalType = 'tests' | 'score' | 'streak' | 'rank' | null;

export const StatCards: React.FC<StatCardsProps> = ({
  completedTestsCount = 0,
  averageScore = 0,
  currentStreak = 0,
  globalRank = '—',
  onOpenQuickTest,
}) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [interactiveStreak, setInteractiveStreak] = useState(currentStreak);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [simulatedScore, setSimulatedScore] = useState(averageScore > 0 ? averageScore : 78);
  const [streakIconVariant, setStreakIconVariant] = useState<'flame' | 'calendar'>('flame');
  const [rankIconVariant, setRankIconVariant] = useState<'trophy' | 'podium'>('trophy');

  React.useEffect(() => {
    setInteractiveStreak(currentStreak);
  }, [currentStreak]);

  const handleStreakCheckIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!checkedInToday) {
      setCheckedInToday(true);
      setInteractiveStreak(prev => prev + 1);
    }
  };

  const streakIllustration = streakIconVariant === 'flame' ? StreakFlame3DIllustration : CalendarFlame3DIllustration;
  const rankIllustration = rankIconVariant === 'trophy' ? TrophyGold3DIllustration : PodiumTrophy3DIllustration;

  const cards = [
    {
      id: 'tests' as const,
      title: 'Tests Attempted',
      value: completedTestsCount.toString(),
      illustration: Clipboard3DIllustration,
      ariaLabel: 'Tests Attempted: 0',
      hint: '3 diagnostic tests available this week'
    },
    {
      id: 'score' as const,
      title: 'Average Score',
      value: completedTestsCount > 0 ? `${averageScore}%` : '0%',
      illustration: ArcheryTarget3DIllustration,
      ariaLabel: 'Average Score: 0%',
      hint: 'Targeting 85% accuracy benchmark'
    },
    {
      id: 'streak' as const,
      title: 'Current Streak',
      value: interactiveStreak.toString(),
      illustration: streakIllustration,
      ariaLabel: `Current Streak: ${interactiveStreak}`,
      hint: checkedInToday ? 'Checked in today!' : 'Complete 1 test to extend streak'
    },
    {
      id: 'rank' as const,
      title: 'Global Rank',
      value: globalRank,
      illustration: rankIllustration,
      ariaLabel: 'Global Rank: —',
      hint: 'Complete 1 test to calculate percentile'
    }
  ];

  return (
    <>
      {/* 4 Cards Grid - Exactly matching reference design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {cards.map((card) => {
          const Illustration = card.illustration;
          return (
            <div
              key={card.id}
              id={`card-${card.id}`}
              onClick={() => setActiveModal(card.id)}
              className="bg-white rounded-[26px] p-5 sm:p-6 relative border border-[#e5f0fc] shadow-[0_10px_28px_rgba(205,225,248,0.42)] flex flex-col justify-between min-h-[175px] sm:min-h-[185px] overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(190,218,248,0.55)] hover:border-sky-200 cursor-pointer select-none"
            >
              {/* Top Row: Title (Left) and Blue Indicator Dot (Right) */}
              <div className="flex items-center justify-between gap-2 z-10">
                <h3 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                  {card.title}
                </h3>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0080ff] block shadow-[0_0_8px_rgba(0,128,255,0.6)] shrink-0 group-hover:scale-125 transition-transform"></span>
              </div>

              {/* Center Content: Left Number with SlidingNumber effect */}
              <div className="my-auto py-2.5 relative z-10">
                <div className="text-4xl sm:text-[44px] font-black text-slate-900 tracking-tight leading-none font-mono">
                  {card.id === 'tests' ? (
                    <SlidingNumber value={completedTestsCount} />
                  ) : card.id === 'score' ? (
                    <div className="inline-flex items-center">
                      <SlidingNumber value={averageScore} />
                      <span className="text-3xl sm:text-[38px] font-black font-sans leading-none">%</span>
                    </div>
                  ) : card.id === 'streak' ? (
                    <SlidingNumber value={interactiveStreak} />
                  ) : card.value.startsWith('#') ? (
                    <div className="inline-flex items-center">
                      <span className="text-3xl sm:text-[38px] font-black font-sans leading-none">#</span>
                      <SlidingNumber value={parseInt(card.value.slice(1), 10) || 0} />
                    </div>
                  ) : (
                    <span className="font-sans">{card.value}</span>
                  )}
                </div>
              </div>

              {/* Bottom Left: Interactive LEARN MORE Button with Pill Chart Icon */}
              <div className="pt-1 z-10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  id={`learn-more-${card.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(card.id);
                  }}
                  className="inline-flex items-center gap-2 group/btn cursor-pointer py-0.5"
                >
                  <div className="w-5 h-5 rounded-full bg-[#edf6ff] text-[#0091ff] flex items-center justify-center shrink-0 border border-sky-100 shadow-2xs group-hover/btn:bg-[#0091ff] group-hover/btn:text-white transition-colors duration-200">
                    <BarChart2 className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wider text-[#0091ff] uppercase flex items-center gap-1 group-hover/btn:text-blue-700 transition-colors">
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Bottom Right Corner: 3D Claymorphic Illustration positioned in corner as in Image 1 */}
              <div className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-1 w-24 h-24 sm:w-28 sm:h-28 flex items-end justify-end pointer-events-none z-0">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Illustration className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-md" />
                </div>
              </div>

              {/* Subtle ambient light glow on card bottom right */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-200/50 transition-colors"></div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modals */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-7 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0091ff] flex items-center justify-center">
                  {activeModal === 'tests' && <Clipboard3DIllustration className="w-8 h-8" />}
                  {activeModal === 'score' && <ArcheryTarget3DIllustration className="w-8 h-8" />}
                  {activeModal === 'streak' && <CalendarFlame3DIllustration className="w-8 h-8" />}
                  {activeModal === 'rank' && <PodiumTrophy3DIllustration className="w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeModal === 'tests' && 'Tests & Assessments'}
                    {activeModal === 'score' && 'Score & Accuracy Analytics'}
                    {activeModal === 'streak' && 'Daily Habit & Streak'}
                    {activeModal === 'rank' && 'Global Leaderboard & Rank'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Interactive performance breakdown
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body - Tests Attempted */}
            {activeModal === 'tests' && (
              <div className="space-y-5 pt-4">
                <div className="flex items-center justify-between p-4 bg-blue-50/70 rounded-2xl border border-blue-100/80">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Completion Status</span>
                    <div className="text-2xl font-black text-slate-900 mt-0.5">
                      {completedTestsCount} <span className="text-sm font-semibold text-slate-500">/ 12 Tests</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-blue-700 shadow-2xs border border-blue-200/60">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Active Cycle
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Available Practice Tests</h4>
                  
                  <div className="space-y-2">
                    <div className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/60 flex items-center justify-between transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">General Diagnostic Assessment</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> 20 questions • 15 mins
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveModal(null);
                          if (onOpenQuickTest) onOpenQuickTest();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#0091ff] text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Start</span>
                      </button>
                    </div>

                    <div className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200/60 flex items-center justify-between transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Logical & Analytical Reasoning</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> 15 questions • 12 mins
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveModal(null);
                          if (onOpenQuickTest) onOpenQuickTest();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Start</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModal(null);
                      if (onOpenQuickTest) onOpenQuickTest();
                    }}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-[#0091ff] text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-blue-600 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Launch Diagnostic Test Now</span>
                  </button>
                </div>
              </div>
            )}

            {/* Modal Body - Average Score */}
            {activeModal === 'score' && (
              <div className="space-y-5 pt-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Current Score</span>
                      <div className="text-3xl font-black text-slate-900 mt-0.5">
                        {completedTestsCount > 0 ? `${averageScore}%` : '0%'}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-500 block">Percentile</span>
                      <span className="text-lg font-black text-[#0091ff]">
                        {completedTestsCount > 0 ? 'Top 12%' : 'Top 100%'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Simulator */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#0091ff]" />
                      Interactive Score Target Simulator
                    </span>
                    <span className="text-xs font-black text-[#0091ff] bg-blue-100 px-2 py-0.5 rounded-md inline-flex items-center">
                      <SlidingNumber value={simulatedScore} />% Score
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={simulatedScore}
                    onChange={(e) => setSimulatedScore(Number(e.target.value))}
                    className="w-full accent-[#0091ff] cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Pass: 50%</span>
                    <span className="font-semibold text-slate-700">
                      Projected Tier: {simulatedScore >= 85 ? 'Top 5% Elite' : simulatedScore >= 70 ? 'Top 20% Competitive' : 'Developing'}
                    </span>
                    <span>Target: 95%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 font-medium block">Quantitative</span>
                    <span className="text-base font-bold text-slate-900">82% accuracy</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 font-medium block">Analytical</span>
                    <span className="text-base font-bold text-slate-900">76% accuracy</span>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Body - Current Streak */}
            {activeModal === 'streak' && (
              <div className="space-y-5 pt-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl border border-amber-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Flame className="w-6 h-6 fill-amber-500 text-amber-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Active Habit Streak</span>
                      <div className="text-3xl font-black text-slate-900">
                        {interactiveStreak} <span className="text-sm font-semibold text-slate-500">Days</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleStreakCheckIn}
                    disabled={checkedInToday}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                      checkedInToday 
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-default'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 active:scale-95'
                    }`}
                  >
                    {checkedInToday ? '✓ Checked In!' : '+ Check In Today'}
                  </button>
                </div>

                {/* 7-Day Habit Tracker */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Weekly Activity</span>
                  <div className="grid grid-cols-7 gap-1.5 text-center">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => {
                      const isToday = idx === 4; // Friday
                      const isFilled = isToday && checkedInToday;
                      return (
                        <div 
                          key={idx}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            isFilled
                              ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                              : isToday 
                              ? 'bg-blue-50 border-blue-200 text-blue-700 font-bold' 
                              : 'bg-slate-50 border-slate-200/70 text-slate-400'
                          }`}
                        >
                          <div className="text-[10px] uppercase font-semibold">{day}</div>
                          <div className="text-sm mt-1">
                            {isFilled ? '🔥' : isToday ? '•' : '—'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3D Icon Style Selector */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700">Card 3D Icon Design</span>
                    <span className="text-[11px] text-slate-400">Click to preview</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setStreakIconVariant('flame')}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        streakIconVariant === 'flame'
                          ? 'bg-sky-50 border-sky-300 text-sky-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>🔥 3D Blue Flame (New)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStreakIconVariant('calendar')}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        streakIconVariant === 'calendar'
                          ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>📅 3D Calendar & Flame</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  💡 <strong>Tip:</strong> Complete at least 1 practice test or quiz daily to maintain and double your weekly ranking multiplier.
                </p>
              </div>
            )}

            {/* Modal Body - Global Rank */}
            {activeModal === 'rank' && (
              <div className="space-y-5 pt-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Your Standing</span>
                    <div className="text-2xl font-black text-slate-900 mt-0.5">
                      {globalRank === '—' ? 'Unranked' : globalRank}
                    </div>
                    <span className="text-xs text-slate-500">Across 14,280 active learners</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>

                {/* Podium Preview */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Top Performers This Week</span>
                  <div className="space-y-1.5">
                    <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black text-[10px] flex items-center justify-center">1</span>
                        <span className="font-bold text-slate-900">Aarav Sharma</span>
                      </div>
                      <span className="font-bold text-amber-700">98.6% • 2,450 XP</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200/70 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-300 text-slate-700 font-black text-[10px] flex items-center justify-center">2</span>
                        <span className="font-bold text-slate-900">Ananya Verma</span>
                      </div>
                      <span className="font-bold text-slate-600">96.8% • 2,180 XP</span>
                    </div>
                    <div className="p-2.5 bg-amber-50/40 border border-amber-100 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-700/60 text-white font-black text-[10px] flex items-center justify-center">3</span>
                        <span className="font-bold text-slate-900">Rohan Iyer</span>
                      </div>
                      <span className="font-bold text-amber-800">95.2% • 1,940 XP</span>
                    </div>
                  </div>
                </div>

                {/* 3D Icon Style Selector */}
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700">Card 3D Icon Design</span>
                    <span className="text-[11px] text-slate-400">Click to preview</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRankIconVariant('trophy')}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        rankIconVariant === 'trophy'
                          ? 'bg-sky-50 border-sky-300 text-sky-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>🏆 3D Blue Trophy (New)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRankIconVariant('podium')}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                        rankIconVariant === 'podium'
                          ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>🥇 3D Champion Podium</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModal(null);
                      if (onOpenQuickTest) onOpenQuickTest();
                    }}
                    className="w-full py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Take a Test to Qualify for Ranking</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
