import React from 'react';
import { Target, Zap, BookOpen, ChevronRight, Play, Award } from 'lucide-react';
import { PRACTICE_TOPICS } from '../data/mockData';

interface PracticeViewProps {
  onOpenQuickTest: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ onOpenQuickTest }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-28">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Adaptive Practice</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Build concept mastery through spaced-repetition drills and topic-wise question banks.
          </p>
        </div>

        <button
          onClick={onOpenQuickTest}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all self-start sm:self-auto"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Quick 5-Minute Sprint</span>
        </button>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRACTICE_TOPICS.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  {topic.category}
                </span>
                <span className="text-xs font-bold text-blue-600">
                  {topic.masteryPercent}% Mastery
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">
                {topic.name}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {topic.completedQuestions} of {topic.questionsTotal} questions solved
              </p>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-5">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${topic.masteryPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={onOpenQuickTest}
              className="w-full inline-flex items-center justify-between py-2 px-3 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60 transition-colors"
            >
              <span>Practice Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
