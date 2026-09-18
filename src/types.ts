export type TabType = 'dashboard' | 'tests' | 'practice' | 'analytics' | 'profile';

export type TimeframeType = 'last_7' | 'last_30' | 'last_90';

export interface StatMetric {
  id: string;
  label: string;
  value: string | number;
  sublabel: string;
  highlightText?: string;
  highlightType?: 'neutral' | 'positive' | 'accent';
  iconName: 'clipboard-check' | 'graduation-cap' | 'target' | 'trophy';
}

export interface TestResultItem {
  id: string;
  title: string;
  category: string;
  scorePercent: number;
  totalMarks: number;
  userMarks: number;
  date: string;
  duration: string;
  accuracy: number;
  status: 'passed' | 'review' | 'needs_work';
}

export interface ScoreTrendPoint {
  attempt: number;
  label: string;
  score: number;
  benchmark: number;
  date: string;
  testName: string;
}

export interface PracticeTopic {
  id: string;
  name: string;
  category: string;
  questionsTotal: number;
  completedQuestions: number;
  masteryPercent: number;
  color: string;
}

export interface AssignedTest {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed';
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
