import React from 'react';
import { 
  Search, 
  Bell, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  SlidersHorizontal,
  ChevronDown,
  Layers,
  Play
} from 'lucide-react';
import { TabType } from '../types';

interface TopHeaderProps {
  onOpenSearch: () => void;
  onOpenQuickTest: () => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isDemoData: boolean;
  setIsDemoData: (val: boolean) => void;
  pendingAssignmentsCount: number;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenSearch,
  onOpenQuickTest,
  activeTab,
  setActiveTab,
  isDemoData,
  setIsDemoData,
  pendingAssignmentsCount
}) => {
  return (
    <header id="top-navigation-header" className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            id="brand-logo-btn"
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            {/* Minimalist vulcan salute / victory inspired icon */}
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm group-hover:bg-blue-600 transition-colors">
              <span className="text-base select-none">🖖</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-base block leading-tight">
                VULCAN
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">
                LEARNING LABS
              </span>
            </div>
          </button>
        </div>

        {/* Global Search Bar (Minimalist with subtle neumorphic inset) */}
        <div className="flex-1 max-w-md hidden md:block">
          <button
            id="global-search-trigger"
            onClick={onOpenSearch}
            type="button"
            className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-600 bg-[#edf2f7] neu-inset rounded-full transition-all group hover:bg-white"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
              <span className="text-xs sm:text-sm">Search tests, topics, formulas...</span>
            </div>
            <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] uppercase font-medium bg-white px-2 py-0.5 rounded-md neu-raised-sm text-slate-600">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Action Controls & Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Mobile search trigger */}
          <button
            id="mobile-search-btn"
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:neu-raised-sm transition-all"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Quick Demo State Switcher */}
          <button
            id="toggle-demo-mode-btn"
            onClick={() => setIsDemoData(!isDemoData)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium neu-button transition-all ${
              isDemoData
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-[#f8fafc] text-slate-700 border border-slate-200/80'
            }`}
            title="Toggle between fresh initial state and populated test history"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Mode:</span>
            <span className="font-semibold">{isDemoData ? 'Active History' : 'New Learner (0 State)'}</span>
          </button>

          {/* Quick Take Test Button */}
          <button
            id="header-take-test-btn"
            onClick={onOpenQuickTest}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 neu-button transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Take Test</span>
          </button>

          {/* Assignments Pill */}
          <button
            id="header-assignments-btn"
            onClick={() => setActiveTab('tests')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-[#f8fafc] neu-button border border-slate-200/80 transition-all"
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Assignments</span>
            <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
              {pendingAssignmentsCount}
            </span>
          </button>

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>

          {/* Notifications */}
          <div className="relative">
            <button
              id="header-notifications-btn"
              className="w-8 h-8 rounded-xl neu-icon-convex flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer relative"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
            </button>
          </div>

          {/* Profile Avatar with subtle neumorphic border */}
          <button
            id="header-profile-btn"
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-full neu-button transition-all cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white text-xs font-bold flex items-center justify-center shadow-xs">
              D
            </div>
            <span className="text-xs font-semibold text-slate-800 hidden xl:inline">Devika</span>
          </button>
        </div>
      </div>
    </header>
  );
};
