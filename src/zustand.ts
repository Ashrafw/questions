import { create } from "zustand";

type responseType = "yes" | "no" | "";
export type AnsweredQuestionType = {
  id: number;
  questionNumber: number;
  question: string;
  response: responseType;
};
interface StateStore {
  answeredQuestion: AnsweredQuestionType[];
  setAnsweredQuestion: (id: AnsweredQuestionType[]) => void;
}

export const useStateStore = create<StateStore>()((set) => ({
  answeredQuestion: [],
  setAnsweredQuestion: (answeredQuestion: AnsweredQuestionType[]) =>
    set({ answeredQuestion }),
}));
