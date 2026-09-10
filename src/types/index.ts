export interface IrregularVerb {
  id: number;
  day: number;
  v1: string;
  v2: string;
  v3: string;
  v2_alt?: string[];
  v3_alt?: string[];
  meaning: string;
  ipa: string;
}

export interface QuizQuestion {
  verb: IrregularVerb;
  type: 'v1_to_v2v3' | 'meaning_to_all' | 'v2v3_to_v1' | 'find_v2' | 'find_v3';
  prompt: string;
  subPrompt?: string;
  options: string[];
  correctIndex: number;
  correctAnswer: string;
  explanation: string;
}

export interface QuizAnswerRecord {
  verbV1: string;
  questionPrompt: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface QuizResult {
  id: string;
  timestamp: number;
  dateString: string;
  score: number;
  total: number;
  percentage: number;
  timeSeconds: number;
  scope: string;
  answers: QuizAnswerRecord[];
}
