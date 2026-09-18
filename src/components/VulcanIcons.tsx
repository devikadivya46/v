import React from 'react';

// Card 1 & Take Test: Clipboard with checkmark badge on bottom right
export const VulcanClipboardIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Clipboard body */}
    <rect x="6" y="7" width="18" height="22" rx="3" />
    {/* Clip at top */}
    <path d="M11 7V5C11 4.44772 11.4477 4 12 4H18C18.5523 4 19 4.44772 19 5V7" />
    {/* Body lines */}
    <line x1="10" y1="12" x2="16" y2="12" />
    <line x1="10" y1="16" x2="18" y2="16" />
    <line x1="10" y1="20" x2="14" y2="20" />
    {/* Checkmark circle badge on bottom right */}
    <circle cx="23" cy="23" r="5.5" fill="#0091ff" stroke="#ffffff" strokeWidth="2" />
    <path d="M21 23L22.5 24.5L25 21.5" stroke="#ffffff" strokeWidth="1.8" fill="none" />
  </svg>
);

// Card 2: Graduation Cap / Mortarboard
export const VulcanGraduationIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Diamond mortarboard top */}
    <polygon points="16,6 28,12 16,18 4,12" fill="currentColor" fillOpacity="0.12" />
    {/* Cap under crown */}
    <path d="M8 14.5V20C8 22.5 11.5 24.5 16 24.5C20.5 24.5 24 22.5 24 20V14.5" />
    {/* Tassel */}
    <path d="M28 12V21" />
    <circle cx="28" cy="22" r="1" fill="currentColor" />
  </svg>
);

// Card 3: Open book with glowing lightbulb / idea rays above it
export const VulcanStreakIdeaIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Rays above lightbulb */}
    <line x1="16" y1="4" x2="16" y2="6.5" />
    <line x1="10" y1="7" x2="11.8" y2="8.8" />
    <line x1="22" y1="7" x2="20.2" y2="8.8" />
    
    {/* Lightbulb head */}
    <circle cx="16" cy="11.5" r="3.5" fill="currentColor" fillOpacity="0.12" />
    <path d="M14.5 14.5H17.5" strokeWidth="1.8" />

    {/* Open Book at bottom */}
    <path d="M5 23.5C7.5 22 11 22 16 23.8C21 22 24.5 22 27 23.5" />
    <path d="M5 19C7.5 17.5 11 17.5 16 19.3C21 17.5 24.5 17.5 27 19V24.5C24.5 23 21 23 16 24.8C11 23 7.5 23 5 24.5V19Z" fill="currentColor" fillOpacity="0.08" />
    <line x1="16" y1="19.3" x2="16" y2="24.8" />
  </svg>
);

// Card 4: Podium with 1, 2, 3 steps and a star on step 1
export const VulcanPodiumIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Star on top of step 1 */}
    <path 
      d="M16 6L17.2 8.5L20 8.9L18 10.8L18.5 13.5L16 12.2L13.5 13.5L14 10.8L12 8.9L14.8 8.5L16 6Z" 
      fill="#0091ff" 
      stroke="#0091ff" 
      strokeWidth="1.2"
    />

    {/* Step 2 (Left, medium height) */}
    <rect x="5" y="18" width="7" height="10" rx="1" fill="currentColor" fillOpacity="0.1" />
    <text x="8.5" y="24.5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">2</text>

    {/* Step 1 (Center, tallest) */}
    <rect x="12" y="14" width="8" height="14" rx="1" fill="currentColor" fillOpacity="0.15" />
    <text x="16" y="21.5" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">1</text>

    {/* Step 3 (Right, lower height) */}
    <rect x="20" y="20" width="7" height="8" rx="1" fill="currentColor" fillOpacity="0.1" />
    <text x="23.5" y="25.5" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">3</text>

    {/* Baseline */}
    <line x1="4" y1="28" x2="28" y2="28" strokeWidth="2" />
  </svg>
);

// Top Bar: Take Interview badge with clip and horizontal lines
export const VulcanInterviewIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M9 5V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5" />
    <circle cx="8" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <line x1="11" y1="10" x2="18" y2="10" strokeWidth="1.8" />
    <circle cx="8" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <line x1="11" y1="14" x2="18" y2="14" strokeWidth="1.8" />
  </svg>
);
