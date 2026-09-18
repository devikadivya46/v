import React, { useState } from 'react';
import { Search, X, BookOpen, FileCheck2, ArrowRight } from 'lucide-react';
import { ASSIGNED_TESTS, PRACTICE_TOPICS } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTest: (testTitle: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTest
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredTests = ASSIGNED_TESTS.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTopics = PRACTICE_TOPICS.filter((top) =>
    top.name.toLowerCase().includes(query.toLowerCase()) ||
    top.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl w-full max-w-xl overflow-hidden transition-all">
        {/* Search Input Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tests, questions, subjects, topics..."
            autoFocus
            className="flex-1 text-sm bg-transparent outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {/* Tests */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">
              Available Tests & Quizzes ({filteredTests.length})
            </h4>
            <div className="space-y-1.5">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  onClick={() => {
                    onSelectTest(test.title);
                    onClose();
                  }}
                  className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 flex items-center justify-between cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {test.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {test.category} • {test.durationMinutes} mins • {test.difficulty}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Practice Topics */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">
              Practice Subject Modules ({filteredTopics.length})
            </h4>
            <div className="space-y-1.5">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => {
                    onSelectTest(topic.name);
                    onClose();
                  }}
                  className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 flex items-center justify-between cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {topic.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {topic.category} • {topic.questionsTotal} questions • {topic.masteryPercent}% mastered
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border text-[10px]">ESC</kbd> to close</span>
          <span>Tip: Use Cmd+K to open anytime</span>
        </div>
      </div>
    </div>
  );
};
