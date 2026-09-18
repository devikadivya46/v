import React from 'react';
import { 
  Home, 
  ClipboardCheck, 
  Target, 
  History, 
  Plus,
  CircleUser
} from 'lucide-react';
import { motion } from 'motion/react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenQuickTest: () => void;
  pendingCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickTest,
  pendingCount = 3
}) => {
  const navItems = [
    {
      id: 'dashboard' as TabType,
      label: 'Dashboard',
      icon: Home,
    },
    {
      id: 'tests' as TabType,
      label: 'My Tests',
      icon: ClipboardCheck,
      badge: pendingCount > 0 ? pendingCount : undefined
    },
    {
      id: 'quick-action' as const,
      label: 'New Test',
      isAction: true,
    },
    {
      id: 'practice' as TabType,
      label: 'Practice',
      icon: Target,
    },
    {
      id: 'analytics' as TabType,
      label: 'Analytics',
      icon: History,
    },
  ];

  return (
    <nav 
      id="bottom-navigation-bar" 
      aria-label="Bottom Navigation"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md pointer-events-auto"
    >
      <div className="bg-[#f8fafc]/95 backdrop-blur-xl border border-white/80 shadow-[4px_6px_18px_rgba(160,175,200,0.28),-4px_-4px_14px_rgba(255,255,255,0.95)] rounded-2xl sm:rounded-full p-1.5 flex items-center justify-between gap-1 transition-all">
        {navItems.map((item) => {
          if (item.isAction) {
            return (
              <div key="quick-action" className="px-1">
                <button
                  id="bottom-nav-quick-test-btn"
                  onClick={onOpenQuickTest}
                  type="button"
                  className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-white neu-button hover:bg-blue-600 active:scale-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                  title="Quick Take Test"
                >
                  <Plus className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
                  <span className="sr-only">Take a test now</span>
                </button>
              </div>
            );
          }

          const isActive = activeTab === item.id;
          const Icon = item.icon!;

          return (
            <button
              key={item.id}
              id={`bottom-nav-tab-${item.id}`}
              onClick={() => setActiveTab(item.id as TabType)}
              type="button"
              className={`relative flex-1 flex flex-col items-center justify-center py-2 px-1 sm:px-2 rounded-xl sm:rounded-full transition-all duration-200 focus:outline-none ${
                isActive 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-0 bg-blue-50/90 neu-inset-sm rounded-xl sm:rounded-full -z-10 border border-blue-100"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}

              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 min-w-[15px] h-[15px] text-[9px] font-bold text-white bg-blue-600 rounded-full flex items-center justify-center px-1 ring-2 ring-white">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className="text-[11px] leading-tight tracking-tight mt-1 whitespace-nowrap select-none font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
