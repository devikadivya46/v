import { TestResultItem, ScoreTrendPoint, PracticeTopic, AssignedTest, QuizQuestion } from '../types';

export const INITIAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which data structure operates on a First-In, First-Out (FIFO) access order?",
    category: "Data Structures",
    options: ["Stack", "Queue", "Priority Heap", "Binary Search Tree"],
    correctIndex: 1,
    explanation: "A Queue processes elements in First-In, First-Out (FIFO) sequence."
  },
  {
    id: 2,
    question: "What is the average-case time complexity of searching an element in a balanced Binary Search Tree?",
    category: "Algorithms",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctIndex: 2,
    explanation: "Searching in a balanced BST halves the search space each step, achieving O(log n) time."
  },
  {
    id: 3,
    question: "In distributed systems, which theorem states that a system cannot simultaneously provide Consistency, Availability, and Partition tolerance?",
    category: "System Design",
    options: ["Amdahl's Law", "CAP Theorem", "Little's Law", "Moore's Theorem"],
    correctIndex: 1,
    explanation: "Eric Brewer's CAP theorem establishes that any distributed data store can only guarantee two out of the three properties."
  }
];

export const DEMO_RECENT_RESULTS: TestResultItem[] = [
  {
    id: 'res-1',
    title: 'Data Structures & Algorithms Diagnostic #4',
    category: 'Computer Science',
    scorePercent: 92,
    totalMarks: 50,
    userMarks: 46,
    date: 'Today, 10:45 AM',
    duration: '28 mins',
    accuracy: 94,
    status: 'passed'
  },
  {
    id: 'res-2',
    title: 'Quantitative Aptitude Mock Series B',
    category: 'Mathematics',
    scorePercent: 78,
    totalMarks: 40,
    userMarks: 31,
    date: 'Yesterday, 4:20 PM',
    duration: '35 mins',
    accuracy: 82,
    status: 'passed'
  },
  {
    id: 'res-3',
    title: 'System Design Fundamentals Quiz',
    category: 'Engineering',
    scorePercent: 65,
    totalMarks: 30,
    userMarks: 19.5,
    date: '14 Sep 2026',
    duration: '22 mins',
    accuracy: 70,
    status: 'review'
  },
  {
    id: 'res-4',
    title: 'Logical Reasoning & Analytical Sprint',
    category: 'Reasoning',
    scorePercent: 88,
    totalMarks: 25,
    userMarks: 22,
    date: '12 Sep 2026',
    duration: '18 mins',
    accuracy: 90,
    status: 'passed'
  }
];

export const DEMO_SCORE_TREND: Record<string, ScoreTrendPoint[]> = {
  last_7: [
    { attempt: 1, label: 'Test 1', score: 62, benchmark: 70, date: '04 Sep', testName: 'Diagnostic Baseline' },
    { attempt: 2, label: 'Test 2', score: 68, benchmark: 70, date: '07 Sep', testName: 'Arrays & Strings' },
    { attempt: 3, label: 'Test 3', score: 74, benchmark: 71, date: '09 Sep', testName: 'Number Systems' },
    { attempt: 4, label: 'Test 4', score: 71, benchmark: 71, date: '11 Sep', testName: 'Tree Traversals' },
    { attempt: 5, label: 'Test 5', score: 85, benchmark: 72, date: '13 Sep', testName: 'Logical Deduction' },
    { attempt: 6, label: 'Test 6', score: 78, benchmark: 72, date: '16 Sep', testName: 'Quantitative Mini' },
    { attempt: 7, label: 'Test 7', score: 92, benchmark: 73, date: 'Today', testName: 'DSA Diagnostic #4' },
  ],
  last_30: [
    { attempt: 1, label: 'W1', score: 58, benchmark: 68, date: '21 Aug', testName: 'Orientation Test' },
    { attempt: 2, label: 'W2', score: 65, benchmark: 69, date: '28 Aug', testName: 'Core Foundations' },
    { attempt: 3, label: 'W3', score: 74, benchmark: 70, date: '05 Sep', testName: 'Mid-term Benchmark' },
    { attempt: 4, label: 'W4', score: 86, benchmark: 72, date: '12 Sep', testName: 'Advanced Practice' },
    { attempt: 5, label: 'Now', score: 92, benchmark: 73, date: '18 Sep', testName: 'DSA Diagnostic' }
  ],
  last_90: [
    { attempt: 1, label: 'Month 1', score: 52, benchmark: 65, date: 'Jul', testName: 'Cohort Entry' },
    { attempt: 2, label: 'Month 2', score: 70, benchmark: 68, date: 'Aug', testName: 'Mid Evaluation' },
    { attempt: 3, label: 'Month 3', score: 88, benchmark: 72, date: 'Sep', testName: 'Final Sprint' }
  ]
};

export const PRACTICE_TOPICS: PracticeTopic[] = [
  {
    id: 'top-1',
    name: 'Data Structures & Algorithms',
    category: 'Computer Science',
    questionsTotal: 140,
    completedQuestions: 98,
    masteryPercent: 70,
    color: 'blue'
  },
  {
    id: 'top-2',
    name: 'Quantitative Aptitude',
    category: 'Mathematics',
    questionsTotal: 110,
    completedQuestions: 55,
    masteryPercent: 50,
    color: 'emerald'
  },
  {
    id: 'top-3',
    name: 'Logical Reasoning',
    category: 'Analytical',
    questionsTotal: 85,
    completedQuestions: 68,
    masteryPercent: 80,
    color: 'violet'
  },
  {
    id: 'top-4',
    name: 'System Design & Architecture',
    category: 'Engineering',
    questionsTotal: 60,
    completedQuestions: 21,
    masteryPercent: 35,
    color: 'amber'
  }
];

export const ASSIGNED_TESTS: AssignedTest[] = [
  {
    id: 'assign-1',
    title: 'Weekly National Mock Assessment 2026',
    category: 'Full Mock',
    durationMinutes: 60,
    questionCount: 45,
    difficulty: 'Medium',
    dueDate: 'In 2 days',
    status: 'pending'
  },
  {
    id: 'assign-2',
    title: 'Graph Algorithms & Dynamic Programming Drill',
    category: 'Topic Drill',
    durationMinutes: 30,
    questionCount: 20,
    difficulty: 'Hard',
    dueDate: 'Tomorrow',
    status: 'pending'
  },
  {
    id: 'assign-3',
    title: 'Verbal & Reading Comprehension Check',
    category: 'Aptitude',
    durationMinutes: 25,
    questionCount: 15,
    difficulty: 'Easy',
    dueDate: '24 Sep',
    status: 'pending'
  }
];
