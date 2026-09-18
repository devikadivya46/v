import React, { useState } from 'react';
import { 
  Search, 
  Briefcase, 
  CircleUser, 
  ShoppingCart, 
  Bell, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Home, 
  ClipboardCheck, 
  ShoppingBag, 
  Crown, 
  Target, 
  BarChart2, 
  History, 
  ArrowLeft,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { VulcanLogo } from './VulcanLogo';
import { 
  VulcanClipboardIcon, 
  VulcanGraduationIcon, 
  VulcanStreakIdeaIcon, 
  VulcanPodiumIcon, 
  VulcanInterviewIcon 
} from './VulcanIcons';
import { StatCards } from './StatCards';
import { GreetingBanner } from './GreetingBanner';
import { SlidebarDock } from './SlidebarDock';

interface OriginalPageProps {
  onTakeTest?: () => void;
  onTakeInterview?: () => void;
  onAssignmentsClick?: () => void;
  completedTestsCount?: number;
  averageScore?: number;
  currentStreak?: number;
  globalRank?: string;
  isDemoData?: boolean;
}

export const OriginalPage: React.FC<OriginalPageProps> = ({
  onTakeTest,
  onTakeInterview,
  onAssignmentsClick,
  completedTestsCount = 0,
  averageScore = 0,
  currentStreak = 0,
  globalRank = '—',
  isDemoData = false
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [activeTimeframe, setActiveTimeframe] = useState<'7' | '30' | '90'>('7');

  return (
    <div className="min-h-screen bg-[#f3f6fa] text-slate-800 flex flex-col font-sans select-none">
      {/* ================= TOP BAR ================= */}
      <header className="h-16 border-b border-gray-200/80 bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-between px-4 z-30 sticky top-0 shadow-[0_2px_8px_rgba(160,175,200,0.08)]">
        {/* Left: Vulcan Logo */}
        <div className="w-56 shrink-0 flex items-center">
          <VulcanLogo />
        </div>

        {/* Center: Search Bar with soft inset neumorphic styling */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tests, questions, topics..."
              className="w-full bg-[#edf2f7] neu-inset rounded-full py-1.5 pl-9 pr-4 text-xs text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:border-sky-400 transition-all"
            />
          </div>
        </div>

        {/* Right: Actions & Profile with decent neumorphic buttons & icon badges */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Assignments */}
          <button
            onClick={onAssignmentsClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0091ff]/70 text-[#0091ff] bg-white neu-button text-xs font-medium cursor-pointer"
          >
            <div className="w-4 h-4 rounded neu-icon-convex flex items-center justify-center text-[#0091ff]">
              <Briefcase className="w-3 h-3" />
            </div>
            <span>Assignments</span>
          </button>

          {/* Take Test */}
          <button
            onClick={onTakeTest}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0091ff]/70 text-[#0091ff] bg-white neu-button text-xs font-medium cursor-pointer"
          >
            <div className="w-4 h-4 rounded neu-icon-convex flex items-center justify-center text-[#0091ff]">
              <VulcanClipboardIcon className="w-3.5 h-3.5" />
            </div>
            <span>Take Test</span>
          </button>

          {/* Take Interview • 0 • 0 • 0 */}
          <button
            onClick={onTakeInterview}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0091ff]/70 text-[#0091ff] bg-white neu-button text-xs font-medium cursor-pointer"
          >
            <div className="w-4 h-4 rounded neu-icon-convex flex items-center justify-center text-[#0091ff]">
              <VulcanInterviewIcon className="w-3.5 h-3.5" />
            </div>
            <span>Take Interview • 0 • 0 • 0</span>
          </button>

          {/* Reports link */}
          <button className="text-xs font-medium text-gray-700 hover:text-black px-1.5 py-1 cursor-pointer">
            Reports
          </button>

          {/* User Profile */}
          <button 
            title="Profile"
            className="w-8 h-8 rounded-xl neu-icon-convex flex items-center justify-center text-gray-600 hover:text-[#0091ff] transition-all cursor-pointer"
          >
            <CircleUser className="w-4 h-4" />
          </button>

          {/* Cart */}
          <button 
            title="Store Cart"
            className="w-8 h-8 rounded-xl neu-icon-convex flex items-center justify-center text-gray-600 hover:text-[#0091ff] transition-all cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>

          {/* Notification Bell */}
          <button 
            title="Notifications"
            className="w-8 h-8 rounded-xl neu-icon-convex flex items-center justify-center text-gray-600 hover:text-[#0091ff] transition-all relative cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#0091ff] rounded-full shadow-[0_0_4px_rgba(0,145,255,0.8)]"></span>
          </button>

          {/* Logout / Exit */}
          <button 
            title="Sign Out"
            className="w-8 h-8 rounded-xl neu-icon-convex flex items-center justify-center text-[#e15241] hover:text-red-700 hover:shadow-[0_0_8px_rgba(225,82,65,0.2)] transition-all ml-0.5 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="flex-1 flex relative">
        {/* Left Sidebar */}
        <aside 
          className={`border-r border-gray-200/80 bg-[#f8fafc] flex flex-col justify-between py-4 transition-all duration-300 relative shrink-0 ${
            sidebarCollapsed ? 'w-16' : 'w-56'
          }`}
        >
          {/* Collapse Toggle Button with soft neumorphic circle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-6 h-6 rounded-full neu-circle-raised bg-white flex items-center justify-center text-gray-500 absolute -right-3 top-5 z-20 hover:text-gray-800 transition-all cursor-pointer"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-3.5 h-3.5" />
            ) : (
              <ChevronLeft className="w-3.5 h-3.5" />
            )}
          </button>

          {sidebarCollapsed ? (
            /* Magnification Dock Mode for Collapsed Sidebar */
            <div className="flex flex-col items-center py-2">
              <SlidebarDock
                orientation="vertical"
                activeNav={activeNav}
                onNavigate={setActiveNav}
                className="border-none shadow-none bg-transparent"
                magnification={52}
                baseSize={38}
                distance={95}
              />
            </div>
          ) : (
            <div className="space-y-6">
            {/* LEARN SECTION */}
            <div>
              <div className="px-5 text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                LEARN
              </div>
              <nav className="space-y-1.5 px-2.5">
                {[
                  { name: 'Dashboard', icon: Home },
                  { name: 'My Tests', icon: ClipboardCheck },
                  { name: 'Store', icon: ShoppingBag },
                  { name: 'Plans', icon: Crown },
                  { name: 'Practice', icon: Target },
                  { name: 'Profile', icon: CircleUser },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveNav(item.name)}
                      className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-xs font-medium transition-all relative group cursor-pointer ${
                        isActive
                          ? 'bg-[#edf6ff] neu-inset-sm text-[#0091ff] font-semibold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-slate-200/40'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#0091ff] rounded-r-full shadow-[0_0_6px_rgba(0,145,255,0.5)]" />
                      )}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        isActive 
                          ? 'neu-icon-blue-convex text-[#0091ff]' 
                          : 'neu-icon-convex text-gray-500 group-hover:text-gray-800'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* PROGRESS SECTION */}
            <div>
              <div className="px-5 text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-2">
                PROGRESS
              </div>
              <nav className="space-y-1.5 px-2.5">
                {[
                  { name: 'Results', icon: BarChart2 },
                  { name: 'Analytics', icon: History },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveNav(item.name)}
                      className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-xs font-medium transition-all relative group cursor-pointer ${
                        isActive
                          ? 'bg-[#edf6ff] neu-inset-sm text-[#0091ff] font-semibold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-slate-200/40'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#0091ff] rounded-r-full shadow-[0_0_6px_rgba(0,145,255,0.5)]" />
                      )}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                        isActive 
                          ? 'neu-icon-blue-convex text-[#0091ff]' 
                          : 'neu-icon-convex text-gray-500 group-hover:text-gray-800'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
          )}
        </aside>

        {/* Main Content View */}
        <main className="flex-1 bg-[#f3f6fa] p-6 overflow-y-auto max-w-[1400px]">
          {/* Back to Home button with soft neumorphic lift */}
          <div className="mb-4">
            <button
              onClick={() => setActiveNav('Dashboard')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/80 text-xs font-medium text-gray-700 bg-white neu-button transition-all cursor-pointer"
            >
              <div className="w-4 h-4 rounded neu-icon-convex flex items-center justify-center text-gray-500">
                <ArrowLeft className="w-2.5 h-2.5" />
              </div>
              <span>Back to Home</span>
            </button>
          </div>

          {/* Good morning, Devika Greeting Banner with animated text reveal effect */}
          <GreetingBanner
            name="Devika"
            subtitle="Keep going! Every attempt moves you closer to your goals."
          />

          {/* 4 Stat Cards Row matching reference design */}
          <StatCards 
            onOpenQuickTest={onTakeTest} 
            isDemoData={isDemoData}
            completedTestsCount={completedTestsCount}
            averageScore={averageScore}
            currentStreak={currentStreak}
            globalRank={globalRank}
          />

          {/* Section 1: Recent Results */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-gray-900">Recent results</h2>
              <button className="text-xs font-medium text-[#0091ff] hover:underline cursor-pointer">
                See all results
              </button>
            </div>

            <div className="neu-card rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-2xl neu-icon-blue-convex text-[#0091ff] flex items-center justify-center mx-auto mb-3 shadow-[0_2px_8px_rgba(0,145,255,0.15)]">
                <CheckCircle2 className="w-7 h-7 stroke-[2]" />
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-1">No results yet</h3>
              <p className="text-xs text-gray-400">Complete a test to see your results here.</p>
            </div>
          </div>

          {/* Section 2: Score Trend */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-gray-900">Score trend</h2>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTimeframe('7')}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeTimeframe === '7'
                      ? 'bg-[#0091ff] text-white shadow-[2px_2px_6px_rgba(0,145,255,0.35)]'
                      : 'text-gray-500 hover:text-gray-800 hover:neu-raised-sm'
                  }`}
                >
                  Last 7 attempts
                </button>
                <button
                  onClick={() => setActiveTimeframe('30')}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeTimeframe === '30'
                      ? 'bg-[#0091ff] text-white shadow-[2px_2px_6px_rgba(0,145,255,0.35)]'
                      : 'text-gray-500 hover:text-gray-800 hover:neu-raised-sm'
                  }`}
                >
                  Last 30 attempts
                </button>
                <button
                  onClick={() => setActiveTimeframe('90')}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeTimeframe === '90'
                      ? 'bg-[#0091ff] text-white shadow-[2px_2px_6px_rgba(0,145,255,0.35)]'
                      : 'text-gray-500 hover:text-gray-800 hover:neu-raised-sm'
                  }`}
                >
                  Last 90 attempts
                </button>
              </div>
            </div>

            <div className="neu-card rounded-2xl py-16 px-4 text-center">
              <p className="text-xs text-gray-400">No completed tests available yet.</p>
            </div>
          </div>

          {/* Floating Slidebar Magnification Dock matching uploaded reference screenshot */}
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
            <SlidebarDock
              orientation="horizontal"
              activeNav={activeNav}
              onNavigate={setActiveNav}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
