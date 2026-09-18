import React, { useState } from 'react';
import { 
  LineChart, 
  TrendingUp, 
  Award, 
  Target, 
  Info,
  Calendar
} from 'lucide-react';
import { TimeframeType, ScoreTrendPoint } from '../types';

interface ScoreTrendProps {
  trendData: ScoreTrendPoint[];
  timeframe: TimeframeType;
  setTimeframe: (tf: TimeframeType) => void;
  hasTests: boolean;
  onOpenQuickTest: () => void;
}

export const ScoreTrend: React.FC<ScoreTrendProps> = ({
  trendData,
  timeframe,
  setTimeframe,
  hasTests,
  onOpenQuickTest,
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<ScoreTrendPoint | null>(null);

  // SVG dimensions
  const svgWidth = 640;
  const svgHeight = 180;
  const paddingX = 40;
  const paddingY = 24;

  const minScore = 40;
  const maxScore = 100;

  // Calculate coordinates
  const points = trendData.map((pt, idx) => {
    const x = paddingX + (idx / Math.max(trendData.length - 1, 1)) * (svgWidth - paddingX * 2);
    const y = svgHeight - paddingY - ((pt.score - minScore) / (maxScore - minScore)) * (svgHeight - paddingY * 2);
    const benchmarkY = svgHeight - paddingY - ((pt.benchmark - minScore) / (maxScore - minScore)) * (svgHeight - paddingY * 2);
    return { ...pt, x, y, benchmarkY };
  });

  // Create SVG path
  const linePath = points.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');

  // Area path for gradient fill
  const areaPath = points.length > 0
    ? `${linePath} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`
    : '';

  const latestScore = trendData.length > 0 ? trendData[trendData.length - 1].score : 0;
  const firstScore = trendData.length > 0 ? trendData[0].score : 0;
  const scoreDiff = latestScore - firstScore;

  return (
    <div className="bg-[#f8fafc] rounded-2xl neu-raised overflow-hidden">
      {/* Header with Timeframe Pills */}
      <div className="px-5 py-4 border-b border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-slate-900 tracking-tight">Score trend</h2>
          {hasTests && scoreDiff !== 0 && (
            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              scoreDiff > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
            }`}>
              <TrendingUp className="w-3 h-3" />
              {scoreDiff > 0 ? `+${scoreDiff}% growth` : `${scoreDiff}%`}
            </span>
          )}
        </div>

        {/* Timeframe selector pills matching original layout with subtle neumorphic touch */}
        <div className="inline-flex p-1 bg-[#edf2f7] neu-inset-sm rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            id="timeframe-last-7-btn"
            type="button"
            onClick={() => setTimeframe('last_7')}
            className={`px-3 py-1 rounded-lg transition-all ${
              timeframe === 'last_7'
                ? 'bg-[#0091ff] text-white font-semibold shadow-[2px_2px_5px_rgba(0,145,255,0.35)]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Last 7 attempts
          </button>
          <button
            id="timeframe-last-30-btn"
            type="button"
            onClick={() => setTimeframe('last_30')}
            className={`px-3 py-1 rounded-lg transition-all ${
              timeframe === 'last_30'
                ? 'bg-[#0091ff] text-white font-semibold shadow-[2px_2px_5px_rgba(0,145,255,0.35)]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Last 30 attempts
          </button>
          <button
            id="timeframe-last-90-btn"
            type="button"
            onClick={() => setTimeframe('last_90')}
            className={`px-3 py-1 rounded-lg transition-all ${
              timeframe === 'last_90'
                ? 'bg-[#0091ff] text-white font-semibold shadow-[2px_2px_5px_rgba(0,145,255,0.35)]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Last 90 attempts
          </button>
        </div>
      </div>

      {/* Chart Canvas or Minimalist Empty State */}
      <div className="p-5">
        {!hasTests ? (
          <div className="py-14 text-center max-w-sm mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <LineChart className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-700 mb-1">
              No completed tests available yet.
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Your test trajectories and percentile curves will display automatically after your tests.
            </p>
            <button
              id="trend-empty-start-btn"
              onClick={onOpenQuickTest}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Start a practice test now →
            </button>
          </div>
        ) : (
          <div>
            {/* SVG Interactive Trend Visualizer */}
            <div className="relative w-full overflow-x-auto select-none">
              <svg 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                className="w-full h-44 sm:h-52 overflow-visible"
              >
                <defs>
                  <linearGradient id="scoreTrendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                {[50, 70, 90].map((scoreLevel) => {
                  const y = svgHeight - paddingY - ((scoreLevel - minScore) / (maxScore - minScore)) * (svgHeight - paddingY * 2);
                  return (
                    <g key={scoreLevel}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={svgWidth - paddingX}
                        y2={y}
                        stroke="#f1f5f9"
                        strokeDasharray="4 4"
                        strokeWidth="1"
                      />
                      <text
                        x={paddingX - 8}
                        y={y + 3}
                        fontSize="9"
                        fill="#94a3b8"
                        textAnchor="end"
                        fontWeight="500"
                      >
                        {scoreLevel}%
                      </text>
                    </g>
                  );
                })}

                {/* Benchmark guideline */}
                {points.length > 1 && (
                  <line
                    x1={points[0].x}
                    y1={points[0].benchmarkY}
                    x2={points[points.length - 1].x}
                    y2={points[points.length - 1].benchmarkY}
                    stroke="#94a3b8"
                    strokeDasharray="2 3"
                    strokeWidth="1.2"
                    opacity="0.6"
                  />
                )}

                {/* Filled Area */}
                {areaPath && (
                  <path d={areaPath} fill="url(#scoreTrendGradient)" />
                )}

                {/* Score Line */}
                {linePath && (
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {/* Data Points */}
                {points.map((pt, idx) => {
                  const isHovered = hoveredPoint?.attempt === pt.attempt;
                  return (
                    <g 
                      key={idx} 
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(pt)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 6 : 4}
                        fill="#ffffff"
                        stroke="#2563eb"
                        strokeWidth={isHovered ? 3 : 2}
                        className="transition-all duration-150"
                      />
                      {/* Label along X axis */}
                      <text
                        x={pt.x}
                        y={svgHeight - 6}
                        fontSize="10"
                        fill={isHovered ? '#1e293b' : '#94a3b8'}
                        textAnchor="middle"
                        fontWeight={isHovered ? '700' : '500'}
                      >
                        {pt.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredPoint && (
                <div 
                  className="absolute top-2 right-4 bg-slate-900 text-white rounded-xl px-3 py-2 text-xs shadow-lg pointer-events-none transition-all duration-150"
                >
                  <div className="font-bold text-blue-300">{hoveredPoint.testName}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span>Score: <strong>{hoveredPoint.score}%</strong></span>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-300">Cohort Avg: {hoveredPoint.benchmark}%</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{hoveredPoint.date}</div>
                </div>
              )}
            </div>

            {/* Micro stats under chart */}
            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-50">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Latest Score</span>
                <span className="text-sm font-bold text-slate-800">{latestScore}%</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Benchmark Target</span>
                <span className="text-sm font-bold text-blue-600">75%</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Attempts Tracked</span>
                <span className="text-sm font-bold text-slate-800">{trendData.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
