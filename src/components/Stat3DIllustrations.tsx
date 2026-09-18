import React from 'react';

// 1. 3D Clipboard with checkmarks, floating badge, and spark rays
export const Clipboard3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-blue-clip" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="65%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* Clipboard Backboard Gradient */}
      <linearGradient id="clip-board-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b9bff" />
        <stop offset="100%" stopColor="#0066ee" />
      </linearGradient>

      {/* Clipboard Bevel Highlight */}
      <linearGradient id="clip-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0040aa" stopOpacity="0.2" />
      </linearGradient>

      {/* Paper Gradient */}
      <linearGradient id="paper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f0f6ff" />
      </linearGradient>

      {/* Badge Gloss */}
      <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38a5ff" />
        <stop offset="100%" stopColor="#0072ff" />
      </linearGradient>

      {/* Drop Shadows */}
      <filter id="shadow-clipboard" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#0055cc" floodOpacity="0.2" />
      </filter>
      <filter id="shadow-badge" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0040aa" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background Soft Aura Circle */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-blue-clip)" />

    {/* Action Spark Lines (Top-Right) */}
    <path d="M124 38L134 32" stroke="#0091ff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    <path d="M132 49L142 47" stroke="#0091ff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />

    {/* Group with slight angle */}
    <g transform="rotate(-6 78 82)" filter="url(#shadow-clipboard)">
      {/* Clipboard Backboard with 3D Depth */}
      <rect x="36" y="24" width="76" height="98" rx="14" fill="#0052cc" />
      <rect x="36" y="22" width="76" height="98" rx="14" fill="url(#clip-board-grad)" />
      <rect x="37" y="23" width="74" height="96" rx="13" stroke="url(#clip-bevel)" strokeWidth="1.5" />

      {/* Paper Sheet */}
      <rect x="44" y="32" width="60" height="82" rx="8" fill="#e2eeff" />
      <rect x="44" y="30" width="60" height="82" rx="8" fill="url(#paper-grad)" />

      {/* Checkbox Rows */}
      {/* Row 1 */}
      <rect x="52" y="44" width="12" height="12" rx="3.5" fill="#e8f3ff" stroke="#2589ff" strokeWidth="1.8" />
      <path d="M55 49.5L57.5 52L61 47" stroke="#0077ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="68" y="46.5" width="28" height="3" rx="1.5" fill="#a4cafe" />
      <rect x="68" y="52" width="16" height="2.5" rx="1.25" fill="#c3ddfe" />

      {/* Row 2 */}
      <rect x="52" y="62" width="12" height="12" rx="3.5" fill="#e8f3ff" stroke="#2589ff" strokeWidth="1.8" />
      <rect x="68" y="64.5" width="26" height="3" rx="1.5" fill="#a4cafe" />
      <rect x="68" y="70" width="20" height="2.5" rx="1.25" fill="#c3ddfe" />

      {/* Row 3 */}
      <rect x="52" y="80" width="12" height="12" rx="3.5" fill="#e8f3ff" stroke="#2589ff" strokeWidth="1.8" />
      <rect x="68" y="82.5" width="24" height="3" rx="1.5" fill="#a4cafe" />
      <rect x="68" y="88" width="14" height="2.5" rx="1.25" fill="#c3ddfe" />

      {/* Metallic Top Clip */}
      <rect x="56" y="16" width="36" height="15" rx="4" fill="#004db8" />
      <rect x="56" y="14" width="36" height="15" rx="4" fill="url(#badge-grad)" />
      <rect x="64" y="9" width="20" height="9" rx="4.5" fill="#dbeafe" stroke="#0062e0" strokeWidth="2.5" />
    </g>

    {/* Floating 3D Blue Circular Checkmark Badge (Bottom Right) */}
    <g filter="url(#shadow-badge)">
      <circle cx="114" cy="98" r="16" fill="#0055d4" />
      <circle cx="114" cy="96" r="16" fill="url(#badge-grad)" />
      <circle cx="114" cy="96" r="14.5" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* White Bold Checkmark */}
      <path 
        d="M106.5 96.5L111.5 101.5L121.5 90.5" 
        stroke="#ffffff" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </g>
  </svg>
);

// 2. 3D Archery Target with Arrow struck in bullseye
export const ArcheryTarget3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-blue-target" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="65%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* 3D Blue Gradients for Concentric Rings */}
      <linearGradient id="ring-outer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4da3ff" />
        <stop offset="100%" stopColor="#0a6be6" />
      </linearGradient>
      <linearGradient id="ring-middle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e3f0ff" />
      </linearGradient>
      <linearGradient id="ring-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2e91ff" />
        <stop offset="100%" stopColor="#005fd9" />
      </linearGradient>
      <linearGradient id="ring-center" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#d5e8ff" />
      </linearGradient>
      <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2589ff" />
        <stop offset="100%" stopColor="#0055cc" />
      </linearGradient>
      <linearGradient id="feather-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#55aaff" />
        <stop offset="100%" stopColor="#1575ee" />
      </linearGradient>

      <filter id="shadow-target" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#0055cc" floodOpacity="0.22" />
      </filter>
      <filter id="shadow-arrow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="5" stdDeviation="3.5" floodColor="#003588" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Background Soft Aura */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-blue-target)" />

    {/* Target Body with 3D Depth */}
    <g filter="url(#shadow-target)">
      {/* Outer 3D Base Thickness */}
      <circle cx="78" cy="86" r="46" fill="#0052cc" opacity="0.35" />

      {/* Ring 1 (Outer Blue) */}
      <circle cx="78" cy="80" r="46" fill="url(#ring-outer)" />
      <circle cx="78" cy="80" r="45" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Ring 2 (White/Light Blue) */}
      <circle cx="78" cy="80" r="34" fill="url(#ring-middle)" />
      <circle cx="78" cy="80" r="34" stroke="#c0dcff" strokeWidth="1" />

      {/* Ring 3 (Medium Blue) */}
      <circle cx="78" cy="80" r="23" fill="url(#ring-inner)" />
      <circle cx="78" cy="80" r="23" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />

      {/* Ring 4 / Center Bullseye */}
      <circle cx="78" cy="80" r="12" fill="url(#ring-center)" />
      <circle cx="78" cy="80" r="6" fill="#0066ee" />
    </g>

    {/* 3D Arrow Flying and Piercing Dead Center */}
    <g filter="url(#shadow-arrow)">
      {/* Arrow Shaft (Coming from Top-Right down to Center) */}
      <line 
        x1="126" 
        y1="38" 
        x2="80" 
        y2="78" 
        stroke="url(#arrow-grad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <line 
        x1="125" 
        y1="37" 
        x2="83" 
        y2="76" 
        stroke="#ffffff" 
        strokeWidth="1.5" 
        strokeOpacity="0.6" 
        strokeLinecap="round" 
      />

      {/* Arrow Impact Point Details */}
      <ellipse cx="78" cy="80" rx="3.5" ry="3.5" fill="#003588" />

      {/* Arrow 3-Fin Fletching (Feathers at Top-Right) */}
      {/* Upper Feather */}
      <path 
        d="M124 40 L136 32 L144 38 L131 46 Z" 
        fill="url(#feather-grad)" 
        stroke="#ffffff" 
        strokeWidth="0.8" 
      />
      {/* Lower Feather */}
      <path 
        d="M122 42 L130 54 L138 52 L128 42 Z" 
        fill="url(#feather-grad)" 
        stroke="#ffffff" 
        strokeWidth="0.8" 
      />
      {/* Center Nock Cap */}
      <rect x="130" y="34" width="6" height="6" rx="2" fill="#004db8" transform="rotate(42 133 37)" />
    </g>
  </svg>
);

// 3. 3D Pure Fire Streak Flame with glossy layers and sparkling embers (Matching Blue Theme)
export const StreakFlame3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-streak-flame" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="60%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* Outer Flame Gradients - Vibrant Electric Blue matching other cards */}
      <linearGradient id="flame-3d-outer" x1="20%" y1="100%" x2="80%" y2="0%">
        <stop offset="0%" stopColor="#0047ba" />
        <stop offset="35%" stopColor="#0066ee" />
        <stop offset="75%" stopColor="#2589ff" />
        <stop offset="100%" stopColor="#60b0ff" />
      </linearGradient>

      {/* Mid Flame Layer */}
      <linearGradient id="flame-3d-mid" x1="30%" y1="100%" x2="70%" y2="10%">
        <stop offset="0%" stopColor="#0080ff" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>

      {/* Inner Core Hot Glow */}
      <linearGradient id="flame-3d-core" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="60%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>

      {/* Specular Edge Gloss */}
      <linearGradient id="flame-gloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>

      {/* Ambient Blue Shadows */}
      <filter id="shadow-main-flame" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#0055cc" floodOpacity="0.3" />
      </filter>
      <filter id="shadow-ember" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#0066ee" floodOpacity="0.28" />
      </filter>
    </defs>

    {/* Background Soft Aura Circle */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-streak-flame)" />

    {/* Top Right Floating Energy Sparkle Stars */}
    <g opacity="0.95">
      {/* 4-point Diamond Star (Top-Right) */}
      <path 
        d="M128 36 Q128 44 136 44 Q128 44 128 52 Q128 44 120 44 Q128 44 128 36 Z" 
        fill="#0091ff" 
      />
      {/* Small Cyan Diamond Star */}
      <path 
        d="M138 58 Q138 63 143 63 Q138 63 138 68 Q138 63 133 63 Q138 63 138 58 Z" 
        fill="#38bdf8" 
      />
      {/* Left Tiny Blue Spark */}
      <circle cx="36" cy="74" r="2.5" fill="#0091ff" opacity="0.75" />
    </g>

    {/* Main 3D Sculpted Fire Flame */}
    <g filter="url(#shadow-main-flame)">
      {/* 3D Base Outer Layer */}
      <path 
        d="M80 18 C83 34 94 48 104 59 C116 72 124 88 123 105 C121 126 103 140 82 140 C58 140 38 123 37 101 C36 84 46 68 56 56 C57 66 61 74 67 76 C70 65 72 46 80 18 Z" 
        fill="url(#flame-3d-outer)" 
      />

      {/* Left Specular Curved Edge (Claymorphic Rim Light) */}
      <path 
        d="M80 22 C73 48 71 65 67 76 C62 74 58 68 57 60 C49 70 41 83 42 98 C43 117 59 133 79 135" 
        stroke="url(#flame-gloss)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Mid Layer Flame Body */}
      <path 
        d="M82 46 C84 57 91 66 99 75 C108 85 113 97 112 110 C110 125 96 134 81 134 C64 134 49 122 49 105 C49 92 57 80 64 72 C66 79 69 83 73 84 C75 76 77 62 82 46 Z" 
        fill="url(#flame-3d-mid)" 
      />

      {/* Inner Glowing Core */}
      <path 
        d="M82 72 C84 79 88 85 94 92 C100 99 102 107 101 115 C100 124 90 130 80 130 C69 130 59 122 59 111 C59 102 65 94 70 89 C71 93 74 95 76 96 C78 90 79 82 82 72 Z" 
        fill="url(#flame-3d-core)" 
      />

      {/* Intense White Specular Heart */}
      <ellipse cx="80" cy="115" rx="8" ry="11" fill="#ffffff" opacity="0.95" />
    </g>

    {/* Floating Secondary Flame Ember (Right Side) */}
    <g filter="url(#shadow-ember)">
      <path 
        d="M116 46 C117 53 121 58 126 62 C124 67 121 70 117 71 C114 71 112 69 112 66 C112 61 114 55 116 46 Z" 
        fill="url(#flame-3d-mid)" 
      />
      <circle cx="118" cy="58" r="2.5" fill="#ffffff" opacity="0.95" />
    </g>
  </svg>
);

// 4. 3D Grand Blue Champion Trophy with embossed star and confetti (Matching Blue Theme)
export const TrophyGold3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-trophy-blue" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="60%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* Blue Cup Body Gradients - Deep metallic azure & cobalt reflection */}
      <linearGradient id="blue-cup-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="25%" stopColor="#38a5ff" />
        <stop offset="70%" stopColor="#0066ee" />
        <stop offset="100%" stopColor="#0047ba" />
      </linearGradient>

      {/* Blue Handle Gradient */}
      <linearGradient id="blue-handle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bae6fd" />
        <stop offset="50%" stopColor="#0077ff" />
        <stop offset="100%" stopColor="#003b99" />
      </linearGradient>

      {/* Rim Bevel */}
      <linearGradient id="blue-rim-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0066ee" stopOpacity="0.25" />
      </linearGradient>

      {/* Star Emblem Gradient - Crisp White/Silver Pop */}
      <linearGradient id="star-emblem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#f0f7ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>

      {/* Pedestal Base Gradient */}
      <linearGradient id="pedestal-base" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066ee" />
        <stop offset="100%" stopColor="#003588" />
      </linearGradient>

      {/* Drop Shadows */}
      <filter id="shadow-trophy-body" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#0047ba" floodOpacity="0.32" />
      </filter>
      <filter id="shadow-star" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="1" dy="3" stdDeviation="2.5" floodColor="#002b70" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background Soft Aura Circle */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-trophy-blue)" />

    {/* Floating Confetti & Sparkles in 3D Space */}
    <g opacity="0.9">
      {/* Top Left Diamond Star */}
      <path d="M38 34 Q38 40 44 40 Q38 40 38 46 Q38 40 32 40 Q38 40 38 34 Z" fill="#0091ff" />
      {/* Top Right Cyan Diamond Star */}
      <path d="M128 32 Q128 39 135 39 Q128 39 128 46 Q128 39 121 39 Q128 39 128 32 Z" fill="#38bdf8" />
      {/* Blue Confetti Pill (Left) */}
      <rect x="28" y="58" width="7" height="3.5" rx="1.75" fill="#38a5ff" transform="rotate(25 31 60)" />
      {/* Sky Blue Confetti (Right) */}
      <rect x="127" y="62" width="6.5" height="3" rx="1.5" fill="#60a5fa" transform="rotate(-30 130 63)" />
      {/* Floating Spark Dots */}
      <circle cx="122" cy="78" r="2.2" fill="#0077ff" />
      <circle cx="34" cy="76" r="2.2" fill="#38bdf8" />
    </g>

    {/* Main Blue Trophy Group */}
    <g filter="url(#shadow-trophy-body)">
      {/* Left Sculpted C-Handle with 3D Depth */}
      <path 
        d="M58 44 C42 44 38 68 56 75 C58 76 60 72 58 70 C46 65 48 50 58 49 Z" 
        fill="url(#blue-handle-grad)" 
      />
      <path 
        d="M58 45 C44 45 40 67 56 74" 
        stroke="#ffffff" 
        strokeWidth="1.4" 
        strokeOpacity="0.75" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Right Sculpted C-Handle with 3D Depth */}
      <path 
        d="M102 44 C118 44 122 68 104 75 C102 76 100 72 102 70 C114 65 112 50 102 49 Z" 
        fill="url(#blue-handle-grad)" 
      />
      <path 
        d="M102 45 C116 45 120 67 104 74" 
        stroke="#ffffff" 
        strokeWidth="1.4" 
        strokeOpacity="0.75" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Main Trophy Cup Bowl */}
      <path 
        d="M56 36 H104 V62 C104 77 93 88 80 88 C67 88 56 77 56 62 V36 Z" 
        fill="url(#blue-cup-body)" 
      />

      {/* Top Elliptical Opening / Rim Highlight */}
      <ellipse cx="80" cy="36" rx="24" ry="6" fill="#0066ee" />
      <ellipse cx="80" cy="35" rx="24" ry="5.5" fill="#60a5fa" />
      <ellipse cx="80" cy="34.5" rx="22" ry="4" fill="#e0f2fe" />

      {/* Specular Curved Highlight on Left Side of Cup */}
      <path 
        d="M62 42 C61 54 64 68 70 78" 
        stroke="#ffffff" 
        strokeWidth="2.5" 
        strokeOpacity="0.75" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Embossed Center Star Emblem with 3D Pop */}
      <g filter="url(#shadow-star)">
        <path 
          d="M80 50 L82.5 56.5 L89 57 L84 61.5 L85.5 68 L80 64.5 L74.5 68 L76 61.5 L71 57 L77.5 56.5 Z" 
          fill="url(#star-emblem-grad)" 
          stroke="#ffffff" 
          strokeWidth="0.8" 
        />
      </g>

      {/* Waist Ring Connector */}
      <rect x="75" y="88" width="10" height="10" rx="2" fill="#0047ba" />
      <rect x="74" y="90" width="12" height="6" rx="3" fill="#38bdf8" />

      {/* Flared Pedestal Stem */}
      <path d="M72 98 H88 L92 110 H68 Z" fill="url(#blue-cup-body)" />

      {/* Heavy 3D Pedestal Base (Sapphire Blue with Cyan Trim) */}
      {/* 3D Base Thickness Drop */}
      <rect x="52" y="118" width="56" height="12" rx="4" fill="#00225e" />
      {/* Front Face */}
      <rect x="52" y="114" width="56" height="12" rx="4" fill="url(#pedestal-base)" />
      {/* Top Cyan Trim Strip */}
      <rect x="54" y="112" width="52" height="3.5" rx="1.75" fill="#38bdf8" />
      {/* Star or #1 Engraving on Base */}
      <text x="80" y="123" fontSize="8.5" fontWeight="900" textAnchor="middle" fill="#ffffff" letterSpacing="1">
        NO. 1
      </text>
    </g>
  </svg>
);

// 3. 3D Flip Calendar with Glowing Fire Flame
export const CalendarFlame3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-blue-cal" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="65%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* Calendar Header Gradient */}
      <linearGradient id="cal-header" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b9bff" />
        <stop offset="100%" stopColor="#0066ee" />
      </linearGradient>

      {/* Flame Gradients - Blue Theme */}
      <linearGradient id="flame-outer" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#0047ba" />
        <stop offset="50%" stopColor="#0077ff" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <linearGradient id="flame-inner" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>

      <filter id="shadow-calendar" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#0055cc" floodOpacity="0.2" />
      </filter>
      <filter id="shadow-flame" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="5" stdDeviation="4.5" floodColor="#0055cc" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background Soft Aura */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-blue-cal)" />

    {/* Action Spark Lines (Top-Right) */}
    <path d="M125 40L135 34" stroke="#0091ff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    <path d="M133 50L143 48" stroke="#0091ff" strokeWidth="3" strokeLinecap="round" opacity="0.85" />

    {/* Calendar 3D Body */}
    <g filter="url(#shadow-calendar)">
      {/* 3D Base Thickness */}
      <rect x="36" y="38" width="82" height="78" rx="16" fill="#004cb8" />

      {/* Main Calendar Body (White) */}
      <rect x="36" y="34" width="82" height="78" rx="16" fill="#ffffff" />
      <rect x="36" y="34" width="82" height="78" rx="16" stroke="#e0efff" strokeWidth="1.5" />

      {/* Top Header Bar (Blue) */}
      <path 
        d="M36 48C36 40.268 42.268 34 50 34H104C111.732 34 118 40.268 118 48V58H36V48Z" 
        fill="url(#cal-header)" 
      />
      <line x1="36" y1="58" x2="118" y2="58" stroke="#0055cc" strokeWidth="1" />

      {/* Binder Rings */}
      <rect x="52" y="26" width="7" height="16" rx="3.5" fill="#ffffff" stroke="#c0dcff" strokeWidth="1.5" />
      <rect x="95" y="26" width="7" height="16" rx="3.5" fill="#ffffff" stroke="#c0dcff" strokeWidth="1.5" />

      {/* Calendar Grid of Day Dots */}
      <g opacity="0.65">
        <circle cx="50" cy="70" r="3.2" fill="#c3ddfe" />
        <circle cx="65" cy="70" r="3.2" fill="#c3ddfe" />
        <circle cx="80" cy="70" r="3.2" fill="#c3ddfe" />
        <circle cx="95" cy="70" r="3.2" fill="#c3ddfe" />

        <circle cx="50" cy="84" r="3.2" fill="#c3ddfe" />
        <circle cx="65" cy="84" r="3.2" fill="#c3ddfe" />
        <circle cx="80" cy="84" r="3.2" fill="#c3ddfe" />
        <circle cx="95" cy="84" r="3.2" fill="#c3ddfe" />

        <circle cx="50" cy="98" r="3.2" fill="#c3ddfe" />
        <circle cx="65" cy="98" r="3.2" fill="#c3ddfe" />
        <circle cx="80" cy="98" r="3.2" fill="#c3ddfe" />
        <circle cx="95" cy="98" r="3.2" fill="#c3ddfe" />
      </g>
    </g>

    {/* 3D Glossy Fire Flame sitting in the center foreground */}
    <g filter="url(#shadow-flame)">
      {/* Outer Flame */}
      <path 
        d="M102 96 C102 110 89 119 76 119 C61 119 52 108 52 95 C52 82 62 74 69 66 C71 72 74 76 77 73 C80 66 78 54 85 45 C92 57 102 75 102 96 Z" 
        fill="url(#flame-outer)" 
      />
      {/* Flame Specular Curve */}
      <path 
        d="M94 94 C94 105 85 113 76 113 C66 113 60 105 60 95 C60 85 68 80 73 73 C75 78 78 81 80 78 C82 72 81 64 85 58 C89 68 94 80 94 94 Z" 
        fill="url(#flame-inner)" 
        opacity="0.9"
      />
      {/* Core Hot White Highlight */}
      <ellipse cx="76" cy="100" rx="7" ry="11" fill="#ffffff" opacity="0.85" />
    </g>
  </svg>
);

// 4. 3D Podium (1, 2, 3) with Golden Trophy Cup & Confetti
export const PodiumTrophy3DIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg 
    viewBox="0 0 160 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      {/* Background Soft Aura */}
      <radialGradient id="aura-blue-podium" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f0ff" stopOpacity="0.85" />
        <stop offset="65%" stopColor="#ebf5ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#f8fbff" stopOpacity="0" />
      </radialGradient>

      {/* Gold Trophy Gradients */}
      <linearGradient id="gold-cup" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe666" />
        <stop offset="45%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="gold-shine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
      </linearGradient>

      {/* Podium Blocks Gradients */}
      <linearGradient id="podium-step1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2589ff" />
        <stop offset="100%" stopColor="#005fd9" />
      </linearGradient>
      <linearGradient id="podium-step2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b9bff" />
        <stop offset="100%" stopColor="#0a6be6" />
      </linearGradient>
      <linearGradient id="podium-step3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4da3ff" />
        <stop offset="100%" stopColor="#1575ee" />
      </linearGradient>

      <filter id="shadow-podium" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#0055cc" floodOpacity="0.22" />
      </filter>
      <filter id="shadow-trophy" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="#b45309" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background Soft Aura */}
    <circle cx="80" cy="80" r="68" fill="url(#aura-blue-podium)" />

    {/* Floating Confetti Particles in 3D space around trophy */}
    <g opacity="0.85">
      {/* Left side confetti */}
      <rect x="36" y="58" width="5" height="5" rx="1.5" fill="#0091ff" transform="rotate(24 38 60)" />
      <rect x="44" y="44" width="6" height="3" rx="1" fill="#38a5ff" transform="rotate(-35 46 45)" />
      <circle cx="48" cy="68" r="2.2" fill="#0066ee" />

      {/* Right side confetti */}
      <rect x="120" y="52" width="6" height="3" rx="1" fill="#0091ff" transform="rotate(45 122 53)" />
      <rect x="124" y="66" width="5" height="5" rx="1.5" fill="#38a5ff" transform="rotate(-20 126 68)" />
      <circle cx="114" cy="45" r="2.2" fill="#0066ee" />
    </g>

    {/* Golden Trophy on Step 1 (Center) */}
    <g filter="url(#shadow-trophy)">
      {/* Handles */}
      <path 
        d="M62 48 C52 48 52 64 63 65" 
        stroke="#f59e0b" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M98 48 C108 48 108 64 97 65" 
        stroke="#f59e0b" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Cup Body */}
      <path 
        d="M62 42 H98 V58 C98 69 90 77 80 77 C70 77 62 69 62 58 V42 Z" 
        fill="url(#gold-cup)" 
      />
      <path 
        d="M62 42 H98 V58 C98 69 90 77 80 77 C70 77 62 69 62 58 V42 Z" 
        stroke="url(#gold-shine)" 
        strokeWidth="1.2" 
      />

      {/* Embossed Star in Center of Trophy */}
      <path 
        d="M80 50 L82 54.5 L87 55 L83 58.5 L84.5 63.5 L80 61 L75.5 63.5 L77 58.5 L73 55 L78 54.5 Z" 
        fill="#ffffff" 
        opacity="0.85" 
      />

      {/* Stem */}
      <rect x="77" y="77" width="6" height="8" fill="#d97706" />

      {/* Base */}
      <rect x="71" y="85" width="18" height="6" rx="2" fill="#b45309" />
      <rect x="71" y="84" width="18" height="5" rx="2" fill="url(#gold-cup)" />
    </g>

    {/* 3D 3-Tier Podium (Steps 2, 1, 3) */}
    <g filter="url(#shadow-podium)">
      {/* 3D Drop Depth at base */}
      <rect x="30" y="122" width="100" height="6" rx="3" fill="#003588" opacity="0.3" />

      {/* Step 2 (Left - Medium) */}
      <rect x="34" y="98" width="30" height="24" rx="4" fill="#004cb8" />
      <rect x="34" y="96" width="30" height="24" rx="4" fill="url(#podium-step2)" />
      <text x="49" y="113" fontSize="13" fontWeight="900" textAnchor="middle" fill="#ffffff" opacity="0.95">2</text>

      {/* Step 1 (Center - Tallest) */}
      <rect x="65" y="88" width="30" height="34" rx="4" fill="#003e99" />
      <rect x="65" y="86" width="30" height="34" rx="4" fill="url(#podium-step1)" />
      <text x="80" y="107" fontSize="15" fontWeight="900" textAnchor="middle" fill="#ffffff">1</text>

      {/* Step 3 (Right - Lowest) */}
      <rect x="96" y="104" width="30" height="18" rx="4" fill="#004cb8" />
      <rect x="96" y="102" width="30" height="18" rx="4" fill="url(#podium-step3)" />
      <text x="111" y="116" fontSize="12" fontWeight="900" textAnchor="middle" fill="#ffffff" opacity="0.95">3</text>
    </g>
  </svg>
);
