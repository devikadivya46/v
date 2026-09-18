import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import { ScoreTrendPoint } from '../types';

interface AnalyticsViewProps {
  trendData: ScoreTrendPoint[];
  averageScore: number;
  completedCount: number;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  trendData,
  averageScore,
  completedCount
}) => {
  return (
    <div className="space-y-6 animate-fade-in pb-28">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Performance Analytics</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Granular breakdown of your accuracy, time expenditure, and subject percentile rankings.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            Cohort: National Exam 2026
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Overall Accuracy
          </span>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">
            {completedCount > 0 ? `${averageScore}%` : '0%'}
          </div>
          <p className="text-xs text-slate-500">
            {completedCount > 0 ? 'Consistent performance across quantitative & verbal' : 'Awaiting diagnostic attempts'}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Avg Time / Question
          </span>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">
            {completedCount > 0 ? '48 sec' : '—'}
          </div>
          <p className="text-xs text-slate-500">
            Target threshold: 60 sec/question (optimal pace)
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
            Cohort Percentile
          </span>
          <div className="text-3xl font-extrabold text-blue-600 mb-2">
            {completedCount > 0 ? 'Top 12%' : 'Top 100%'}
          </div>
          <p className="text-xs text-slate-500">
            Ahead of 88% of learners in diagnostic assessments
          </p>
        </div>
      </div>

      {/* Subject Strengths breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">Subject Mastery & Confidence</h3>
        <div className="space-y-4">
          {[
            { subject: 'Logical Reasoning & Deduction', score: 88, status: 'Strong', color: 'bg-emerald-500' },
            { subject: 'Data Structures & Algorithms', score: 78, status: 'Good', color: 'bg-blue-500' },
            { subject: 'Quantitative Aptitude', score: 72, status: 'Moderate', color: 'bg-amber-500' },
            { subject: 'System Design & Concepts', score: 55, status: 'Focus Area', color: 'bg-rose-500' },
          ].map((subj, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{subj.subject}</span>
                <span className="font-bold text-slate-700">{subj.score}% • {subj.status}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${subj.color} rounded-full`} style={{ width: `${subj.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
