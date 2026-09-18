'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';

export interface DockItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  onClick?: () => void;
  href?: string;
  badge?: number | string;
  isActive?: boolean;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  magnification?: number;
  distance?: number;
  baseSize?: number;
}

export function FloatingDock({
  items,
  className = '',
  orientation = 'horizontal',
  magnification = 68,
  distance = 140,
  baseSize = 42,
}: FloatingDockProps) {
  const mouseCoord = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => {
        if (orientation === 'horizontal') {
          mouseCoord.set(e.pageX);
        } else {
          mouseCoord.set(e.pageY);
        }
      }}
      onMouseLeave={() => mouseCoord.set(Infinity)}
      className={`relative flex items-center justify-center gap-3 bg-[#f3f5f8]/90 backdrop-blur-md border border-slate-200/80 shadow-md ${
        orientation === 'horizontal'
          ? 'flex-row px-3.5 py-2 rounded-2xl sm:rounded-3xl'
          : 'flex-col px-2 py-3.5 rounded-2xl sm:rounded-3xl'
      } ${className}`}
    >
      {items.map((item) => (
        <DockIcon
          key={item.id}
          mouseCoord={mouseCoord}
          item={item}
          orientation={orientation}
          magnification={magnification}
          distance={distance}
          baseSize={baseSize}
        />
      ))}
    </motion.div>
  );
}

interface DockIconProps {
  mouseCoord: any;
  item: DockItem;
  orientation: 'horizontal' | 'vertical';
  magnification: number;
  distance: number;
  baseSize: number;
}

function DockIcon({
  mouseCoord,
  item,
  orientation,
  magnification,
  distance,
  baseSize,
}: DockIconProps) {
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

  const sizeTransform = useTransform(
    distCalc,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const iconScaleTransform = useTransform(
    distCalc,
    [-distance, 0, distance],
    [18, Math.round(magnification * 0.46), 18]
  );

  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 160,
    damping: 12,
  });

  const iconSize = useSpring(iconScaleTransform, {
    mass: 0.1,
    stiffness: 160,
    damping: 12,
  });

  const IconComponent = item.icon;

  return (
    <div className="relative flex items-center justify-center">
      {/* Tooltip Badge above (or beside) the icon matching uploaded screenshot */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: orientation === 'horizontal' ? 6 : 0, x: orientation === 'vertical' ? -6 : 0, scale: 0.9 }}
            animate={{ opacity: 1, y: orientation === 'horizontal' ? -10 : 0, x: orientation === 'vertical' ? 12 : 0, scale: 1 }}
            exit={{ opacity: 0, y: orientation === 'horizontal' ? 4 : 0, x: orientation === 'vertical' ? -4 : 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-50 pointer-events-none whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/95 text-slate-700 text-xs font-semibold shadow-md border border-slate-200/90 ${
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
        className={`rounded-full flex items-center justify-center relative cursor-pointer outline-none transition-colors duration-200 ${
          item.isActive
            ? 'bg-[#dce5f0] text-[#0084f0] shadow-inner ring-2 ring-[#0091ff]/30'
            : 'bg-[#e7ebf1] hover:bg-[#dfe5ee] text-slate-700'
        }`}
        aria-label={item.title}
      >
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          <IconComponent
            style={{ width: '100%', height: '100%' }}
            className={item.isActive ? 'text-[#0084f0]' : 'text-slate-700'}
          />
        </motion.div>

        {/* Active Indicator Dot */}
        {item.isActive && (
          <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#0084f0]" />
        )}

        {/* Optional Badge (e.g. pending count) */}
        {item.badge !== undefined && (
          <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center shadow-xs">
            {item.badge}
          </span>
        )}
      </motion.button>
    </div>
  );
}
