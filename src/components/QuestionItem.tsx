import { AnsweredQuestionType } from "../zustand";

type Props = {
  question: AnsweredQuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnsweredQuestionType[]>>;
};

export default function QuestionItem({ question, setAnswers }: Props) {
  const handleClick = (ans: "yes" | "no") => {
    setAnswers((prev) =>
      prev.map((item) => (item.id === question.id ? { ...item, response: ans } : item))
    );
  };
  return (
    <div className="mb-8">
      <p className=" text-xl font-medium  min-h-24 ">{question.question}</p>
      <div className=" grid grid-cols-2 gap-4 mt-2">
        <button
          onClick={() => handleClick("yes")}
          className={` border flex items-center text-lg  cursor-pointer rounded-lg shadow p-2 pl-4 ${
            question.response === "yes" ? "bg-sky-700 text-white" : ""
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleClick("no")}
          className={`border flex items-center text-lg  cursor-pointer rounded-lg shadow p-2 pl-4 ${
            question.response === "no" ? "bg-sky-700 bg- text-white" : ""
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}
