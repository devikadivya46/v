import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw, Sparkles } from 'lucide-react';
import { TextReveal } from './ui/text-reveal';

interface GreetingBannerProps {
  name?: string;
  subtitle?: string;
  className?: string;
}

export const GreetingBanner: React.FC<GreetingBannerProps> = ({
  name = 'Devika',
  subtitle = 'Keep going! Every attempt moves you closer to your goals.',
  className = ''
}) => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div
      key={animationKey}
      onClick={() => setAnimationKey((prev) => prev + 1)}
      title="Click anywhere on banner to replay text reveal effect"
      className={`group bg-[#edf6ff] rounded-2xl p-6 sm:p-7 mb-6 relative border border-white/90 shadow-[4px_4px_12px_rgba(180,200,230,0.35),-4px_-4px_12px_rgba(255,255,255,0.95)] overflow-hidden transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Subtle ambient light glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

      {/* Main Heading with Text Reveal */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight flex flex-wrap items-center gap-2">
          <TextReveal
            text={`Good morning, ${name}`}
            delay={0.05}
            stagger={0.08}
            duration={0.5}
            as="span"
          />

          {/* Clapping Hands with bouncing spring entry and hover bounce */}
          <motion.span
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 15,
              delay: 0.35,
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-2xl inline-block origin-bottom select-none"
          >
            👏
          </motion.span>
        </h1>

        {/* Subtitle with staggered word-by-word reveal */}
        <div className="mt-1">
          <TextReveal
            text={subtitle}
            delay={0.38}
            stagger={0.035}
            duration={0.4}
            as="p"
            className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed"
          />
        </div>
      </div>

      {/* Replay indicator pill on hover */}
      <button
        onClick={handleReplay}
        className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-xs text-sky-700 font-medium shadow-xs border border-sky-100 flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
        title="Replay reveal animation"
      >
        <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
        <span className="text-[11px]">Replay</span>
      </button>
    </div>
  );
};
