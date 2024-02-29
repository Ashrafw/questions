import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  questionNum: number;
  setQuestionNum: React.Dispatch<React.SetStateAction<number>>;
  numberOfQuestion: number;
  isAnswered: boolean;
  handleSubmit: () => void;
};

export default function QuestionNavigation({
  questionNum,
  setQuestionNum,
  numberOfQuestion,
  isAnswered,
  handleSubmit,
}: Props) {
  return (
    <div className="flex ">
      <button
        onClick={() => setQuestionNum((prev) => prev - 1)}
        disabled={questionNum === 0}
        className={`py-2 mt-10 m-auto px-6 text-xl max-sm:text-base shadow font-semibold min-w-[140px] flex items-center justify-center rounded bg-sky-700 hover:bg-sky-800 text-gray-50 ${
          questionNum === 0 ? "opacity-0" : ""
        }`}
      >
        <ChevronLeft /> Back
      </button>
      {questionNum < numberOfQuestion - 1 ? (
        <button
          onClick={() => setQuestionNum((prev) => prev + 1)}
          disabled={isAnswered}
          className={`py-2 mt-10 m-auto px-6 text-xl max-sm:text-base shadow font-semibold min-w-[140px] flex items-center justify-center rounded bg-sky-700 hover:bg-sky-800 text-gray-50 ${
            isAnswered && "opacity-10"
          }`}
        >
          Next <ChevronRight />
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={isAnswered}
          className={`py-2 mt-10 m-auto px-6 text-xl max-sm:text-base shadow font-semibold min-w-[140px] flex items-center justify-center rounded bg-sky-700 hover:bg-sky-800 text-gray-50 ${
            isAnswered && "opacity-10"
          }`}
        >
          Submit
        </button>
      )}
    </div>
  );
}
