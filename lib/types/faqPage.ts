import { ReactNode } from 'react';

export interface FaqPageData {
  faqPage: {
    questionTypes: QuestionType[];
  };
}

interface QuestionType {
  id: string;
  name: string;
  questions: QuestionAnswer[];
}

interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
}
