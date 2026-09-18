import React, { useState } from 'react';
import { 
  FileCheck2, 
  Clock, 
  AlertCircle, 
  Play, 
  CheckCircle2, 
  Calendar,
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';
import { ASSIGNED_TESTS } from '../data/mockData';
import { AssignedTest, TestResultItem } from '../types';

interface TestsViewProps {
  onOpenQuickTest: () => void;
  recentResults: TestResultItem[];
}

export const TestsView: React.FC<TestsViewProps> = ({
  onOpenQuickTest,
  recentResults
}) => {
  const [activeFilter, setActiveFilter] = useState<'assigned' | 'completed'>('assigned');

  return (
    <div className="space-y-6 animate-fade-in pb-28">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">My Tests</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your assigned examinations, mock diagnostics, and test records.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-medium border border-slate-200/60 self-start sm:self-auto">
          <button
            onClick={() => setActiveFilter('assigned')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeFilter === 'assigned'
                ? 'bg-white text-slate-900 font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Assigned ({ASSIGNED_TESTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeFilter === 'completed'
                ? 'bg-white text-slate-900 font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Completed ({recentResults.length})
          </button>
        </div>
      </div>

      {/* Content list */}
      {activeFilter === 'assigned' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ASSIGNED_TESTS.map((test) => {
            const isHard = test.difficulty === 'Hard';
            const isMedium = test.difficulty === 'Medium';

            return (
              <div
                key={test.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      {test.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isHard 
                        ? 'bg-rose-50 text-rose-700' 
                        : isMedium
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {test.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {test.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-500 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{test.durationMinutes} Minutes • {test.questionCount} Questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Due: {test.dueDate}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenQuickTest}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-xs active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Test Now</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 p-2">
          {recentResults.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-semibold text-slate-700">No completed tests yet.</p>
              <button 
                onClick={onOpenQuickTest}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Take a test now
              </button>
            </div>
          ) : (
            recentResults.map((item) => (
              <div key={item.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-100">
                    {item.scorePercent}%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.category} • {item.date} • Duration: {item.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-800">{item.userMarks}/{item.totalMarks} Marks</span>
                  <span className="block text-[10px] text-emerald-600 font-semibold uppercase">{item.status}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
