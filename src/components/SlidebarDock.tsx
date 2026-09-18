'use client';

import React, { useRef, useState } from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  AnimatePresence 
} from 'motion/react';
import { 
  Home, 
  Package, 
  LayoutGrid, 
  Activity, 
  FileText, 
  Mail, 
  Moon,
  SunMedium,
  Check,
  Send,
  X
} from 'lucide-react';

export interface SlidebarDockItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  onClick?: () => void;
  badge?: number | string;
  isActive?: boolean;
}

interface SlidebarDockProps {
  activeNav?: string;
  onNavigate?: (navId: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  onOpenSupport?: () => void;
  magnification?: number;
  distance?: number;
  baseSize?: number;
}

export const SlidebarDock: React.FC<SlidebarDockProps> = ({
  activeNav = 'Dashboard',
  onNavigate,
  orientation = 'horizontal',
  className = '',
  onOpenSupport,
  magnification = 68,
  distance = 135,
  baseSize = 42,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const mouseCoord = useMotionValue(Infinity);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactMessage('');
      setIsContactModalOpen(false);
    }, 1500);
  };

  const dockItems: SlidebarDockItem[] = [
    {
      id: 'Dashboard',
      title: 'Home',
      icon: Home,
      isActive: activeNav === 'Dashboard' || activeNav === 'dashboard',
      onClick: () => onNavigate?.('Dashboard'),
    },
    {
      id: 'My Tests',
      title: 'My Tests',
      icon: Package, // Package/box matching 2nd icon in user screenshot
      isActive: activeNav === 'My Tests' || activeNav === 'tests',
      badge: 3,
      onClick: () => onNavigate?.('My Tests'),
    },
    {
      id: 'Practice',
      title: 'Practice',
      icon: LayoutGrid, // 4-diamonds/grid matching 3rd icon in user screenshot
      isActive: activeNav === 'Practice' || activeNav === 'practice' || activeNav === 'Store',
      onClick: () => onNavigate?.('Practice'),
    },
    {
      id: 'Analytics',
      title: 'Analytics',
      icon: Activity, // Pulse/wave matching 4th icon in user screenshot
      isActive: activeNav === 'Analytics' || activeNav === 'analytics',
      onClick: () => onNavigate?.('Analytics'),
    },
    {
      id: 'Results',
      title: 'Results',
      icon: FileText, // Document/scroll matching 5th icon in user screenshot
      isActive: activeNav === 'Results' || activeNav === 'results',
      onClick: () => onNavigate?.('Results'),
    },
    {
      id: 'Mail',
      title: 'Support',
      icon: Mail, // Mail/envelope matching 6th icon in user screenshot
      onClick: () => {
        if (onOpenSupport) {
          onOpenSupport();
        } else {
          setIsContactModalOpen(true);
        }
      },
    },
    {
      id: 'Theme',
      title: isDarkMode ? 'Light Mode' : 'Dark Mode',
      icon: isDarkMode ? SunMedium : Moon, // Moon with sparkle matching 7th icon in user screenshot
      onClick: handleToggleTheme,
    },
  ];

  return (
    <>
      <motion.nav
        aria-label="Slidebar Magnification Dock"
        onMouseMove={(e) => {
          if (orientation === 'horizontal') {
            mouseCoord.set(e.pageX);
          } else {
            mouseCoord.set(e.pageY);
          }
        }}
        onMouseLeave={() => mouseCoord.set(Infinity)}
        className={`relative flex items-center justify-center bg-[#f4f6fa]/95 backdrop-blur-md border border-slate-200/90 shadow-lg ${
          orientation === 'horizontal'
            ? 'flex-row gap-2.5 px-3 py-2 rounded-3xl h-[62px]'
            : 'flex-col gap-2.5 px-2 py-3 rounded-3xl w-[62px]'
        } ${className}`}
      >
        {dockItems.map((item) => (
          <SlidebarDockIcon
            key={item.id}
            mouseCoord={mouseCoord}
            item={item}
            orientation={orientation}
            magnification={magnification}
            distance={distance}
            baseSize={baseSize}
          />
        ))}
      </motion.nav>

      {/* Support Message Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 border border-slate-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">Support & Feedback</h3>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleContactSubmit} className="mt-3 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Send feedback to Vulcan Team:
                  </label>
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe your issue or feature request..."
                    rows={3}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                    required
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={contactSent}
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    {contactSent ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

interface SlidebarDockIconProps {
  mouseCoord: any;
  item: SlidebarDockItem;
  orientation: 'horizontal' | 'vertical';
  magnification: number;
  distance: number;
  baseSize: number;
}

function SlidebarDockIcon({
  mouseCoord,
  item,
  orientation,
  magnification,
  distance,
  baseSize,
}: SlidebarDockIconProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const distCalc = useTransform(mouseCoord, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;

    if (orientation === 'horizontal') {
      const center = bounds.x + bounds.width / 2 + window.scrollX;
      return val - center;
    } else {
      const center = bounds.y + bounds.height / 2 + window.scrollY;
      return val - center;
    }
  });

  // Calculate size based on distance from mouse (smooth macOS dock curve)
  const sizeTransform = useTransform(
    distCalc,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const iconScaleTransform = useTransform(
    distCalc,
    [-distance, 0, distance],
    [18, Math.round(magnification * 0.44), 18]
  );

  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });

  const iconSize = useSpring(iconScaleTransform, {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });

  const IconComponent = item.icon;

  return (
    <div className="relative flex items-center justify-center">
      {/* Tooltip Badge above or beside icon (exact match to screenshot "Home") */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ 
              opacity: 0, 
              y: orientation === 'horizontal' ? 4 : 0, 
              x: orientation === 'vertical' ? -4 : 0, 
              scale: 0.9 
            }}
            animate={{ 
              opacity: 1, 
              y: orientation === 'horizontal' ? -8 : 0, 
              x: orientation === 'vertical' ? 10 : 0, 
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              y: orientation === 'horizontal' ? 4 : 0, 
              x: orientation === 'vertical' ? -4 : 0, 
              scale: 0.9 
            }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            className={`absolute z-50 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-lg bg-white text-slate-700 text-xs font-semibold shadow-sm border border-slate-200/90 ${
              orientation === 'horizontal'
                ? 'bottom-full left-1/2 -translate-x-1/2 mb-1.5'
                : 'left-full top-1/2 -translate-y-1/2 ml-2'
            }`}
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={ref}
        type="button"
        onClick={item.onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{ width: size, height: size }}
        className={`rounded-full flex items-center justify-center relative cursor-pointer outline-none transition-colors duration-150 select-none ${
          item.isActive
            ? 'bg-[#dbe4ef] text-slate-900 ring-2 ring-blue-400/40 shadow-inner'
            : 'bg-[#e5eaf1] hover:bg-[#dce3ec] text-slate-700 shadow-xs'
        }`}
        aria-label={item.title}
        title={orientation === 'vertical' ? item.title : undefined}
      >
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center pointer-events-none"
        >
          <IconComponent
            style={{ width: '100%', height: '100%' }}
            className={item.isActive ? 'text-blue-600' : 'text-slate-700'}
          />
        </motion.div>

        {/* Small Active Indicator Dot */}
        {item.isActive && (
          <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-xs" />
        )}

        {/* Optional Notification Badge */}
        {item.badge !== undefined && (
          <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-blue-500 text-[10px] font-bold text-white flex items-center justify-center shadow-xs">
            {item.badge}
          </span>
        )}
      </motion.button>
    </div>
  );
}
