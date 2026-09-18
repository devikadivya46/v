import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ArrowRight, 
  Trophy, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { INITIAL_QUIZ_QUESTIONS } from '../data/mockData';
import { TestResultItem } from '../types';

interface QuickTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteTest: (newResult: TestResultItem) => void;
}

export const QuickTestModal: React.FC<QuickTestModalProps> = ({
  isOpen,
  onClose,
  onCompleteTest
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(120);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIdx(0);
      setSelectedAnswers({});
      setIsSubmitted(false);
      setTimerSeconds(120);
      return;
    }

    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQ = INITIAL_QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = INITIAL_QUIZ_QUESTIONS.length;

  const handleSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optionIdx
    });
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      handleSubmit();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    INITIAL_QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    const percent = Math.round((correct / totalQuestions) * 100);
    return { correct, percent };
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const { correct, percent } = calculateScore();

    const newResult: TestResultItem = {
      id: `res-${Date.now()}`,
      title: 'Computer Science & Logic Speed Diagnostic',
      category: 'Diagnostic',
      scorePercent: percent,
      totalMarks: 30,
      userMarks: Math.round(correct * 10),
      date: 'Just now',
      duration: `${Math.round((120 - timerSeconds) / 60 * 10) / 10 || 1} min`,
      accuracy: percent,
      status: percent >= 70 ? 'passed' : 'review'
    };

    onCompleteTest(newResult);
  };

  const { correct, percent } = calculateScore();

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl w-full max-w-lg overflow-hidden transition-all">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              Q
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Diagnostic Quick Test</h3>
              <p className="text-[11px] text-slate-500">Core Foundations & Logic</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSubmitted && (
              <div className="flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTime(timerSeconds)}</span>
              </div>
            )}
            <button
              id="close-quiz-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Question {currentIdx + 1} of {totalQuestions}</span>
                <span className="text-blue-600 font-semibold">{currentQ.category}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h4 className="text-base font-semibold text-slate-900 mb-5 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 mb-6">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[currentIdx] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      id={`question-option-${oIdx}`}
                      onClick={() => handleSelect(oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-medium ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center border ${
                          isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom control */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx(currentIdx - 1)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-40 disabled:pointer-events-none"
                >
                  Previous
                </button>

                <button
                  id="quiz-next-btn"
                  type="button"
                  disabled={selectedAnswers[currentIdx] === undefined}
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none transition-all shadow-sm active:scale-95"
                >
                  <span>{currentIdx === totalQuestions - 1 ? 'Submit Diagnostic' : 'Next Question'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Result Completion Card */
            <div className="py-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
                Diagnostic Complete!
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                You scored {percent}%
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                You answered {correct} out of {totalQuestions} questions correctly. Your dashboard stats and score trend have updated!
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-left">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Accuracy</span>
                  <span className="text-base font-bold text-slate-800">{percent}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Status</span>
                  <span className="text-base font-bold text-emerald-600">
                    {percent >= 70 ? 'Passed' : 'Needs Review'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  id="quiz-done-btn"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 transition-all"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
