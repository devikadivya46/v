import React from 'react';

export const VulcanLogo: React.FC<{ className?: string }> = ({ className = "h-9" }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Hand icon with Vulcan salute (split fingers) */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-slate-900"
      >
        <path
          d="M18 36V16C18 14.3431 19.3431 13 21 13C22.6569 13 24 14.3431 24 16V22"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 36V18C13 16.3431 14.3431 15 16 15C17.6569 15 18 16 18 17.5V36"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 22V16C27 14.3431 28.3431 13 30 13C31.6569 13 33 14.3431 33 16V36"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 18C33 16.3431 34.3431 15 36 15C37.6569 15 38 16 38 17.5V28C38 35 34 42 25 42C17 42 11 36 11 29V25C11 23.3431 12.3431 22 14 22C15.6569 22 17 23.3431 17 25V36"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 25L8 28C6.5 29.5 7.5 32 9.5 32H11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[9px] font-bold tracking-widest text-slate-800 uppercase mt-0.5 leading-none">
        VULCAN
      </span>
    </div>
  );
};
