'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  mode?: 'word' | 'character';
  blur?: boolean;
}

export function TextReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.06,
  duration = 0.45,
  as = 'span',
  mode = 'word',
  blur = true,
}: TextRevealProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: blur ? 'blur(8px)' : 'none',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        mass: 0.6,
        duration,
      },
    },
  };

  const Component = (motion as any)[as] || motion.span;

  if (mode === 'character') {
    const characters = Array.from(text);
    return (
      <Component
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`inline-flex flex-wrap ${className}`}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={itemVariants}
            className={`inline-block ${char === ' ' ? 'w-[0.25em]' : ''} ${wordClassName}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  const words = text.split(' ');

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={itemVariants}
          className={`inline-block ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
