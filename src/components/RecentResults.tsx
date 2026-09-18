import React from 'react';
import { 
  FileQuestion, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  ChevronRight,
  Sparkles,
  Play
} from 'lucide-react';
import { TestResultItem } from '../types';

interface RecentResultsProps {
  results: TestResultItem[];
  onOpenQuickTest: () => void;
  onViewAllResults: () => void;
  onSelectResult?: (result: TestResultItem) => void;
}

export const RecentResults: React.FC<RecentResultsProps> = ({
  results,
  onOpenQuickTest,
  onViewAllResults,
  onSelectResult
}) => {
  const hasResults = results.length > 0;

  return (
    <div className="bg-[#f8fafc] rounded-2xl neu-raised overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-slate-900 tracking-tight">Recent results</h2>
          {hasResults && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {results.length}
            </span>
          )}
        </div>
        <button
          id="see-all-results-btn"
          onClick={onViewAllResults}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
        >
          <span>See all results</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-5">
        {!hasResults ? (
          /* Sleek, Minimalist Empty State */
          <div className="py-12 px-4 text-center max-w-sm mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 neu-circle-raised flex items-center justify-center mx-auto mb-4">
              <FileQuestion className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800 tracking-tight mb-1">
              No results yet
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Complete your first diagnostic test to track your accuracy, percentiles, and subject mastery.
            </p>
            <button
              id="empty-state-take-test-btn"
              onClick={onOpenQuickTest}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 shadow-sm transition-all active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Quick Diagnostic</span>
            </button>
          </div>
        ) : (
          /* Populated Modern List of Results */
          <div className="divide-y divide-slate-100">
            {results.slice(0, 4).map((item) => {
              const isHigh = item.scorePercent >= 80;
              const isMedium = item.scorePercent >= 60 && item.scorePercent < 80;

              return (
                <div
                  key={item.id}
                  id={`recent-result-row-${item.id}`}
                  onClick={() => onSelectResult && onSelectResult(item)}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer hover:bg-slate-50/70 rounded-xl p-2.5 transition-colors -mx-2.5"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border font-bold text-xs ${
                      isHigh 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : isMedium
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {item.scorePercent}%
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </span>
                        <span>•</span>
                        <span>Accuracy: {item.accuracy}%</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right hidden sm:block">
                      <span className="text-xs font-bold text-slate-800">
                        {item.userMarks}/{item.totalMarks}
                      </span>
                      <span className="block text-[10px] text-slate-400">Marks</span>
                    </div>
                    <button 
                      type="button"
                      className="p-1.5 rounded-lg text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-200/60 transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
