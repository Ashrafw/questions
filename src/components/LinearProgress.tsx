import { Check } from "lucide-react";
import { v4 as uuid } from "uuid";

type Props = {
  currentQuestion: number;
  percentage: number;
  questionNumbers: number[];
};

export default function LinearProgress({
  currentQuestion,
  percentage,
  questionNumbers,
}: Props) {
  return (
    <div className="relative">
      <div className="absolute z-0 top-1/2 -translate-y-1/2 w-full h-4  bg-gray-200 rounded-full"></div>
      <div
        style={{ width: `${percentage}%` }}
        className={` absolute h-4 top-1/2 -translate-y-1/2 bg-sky-600 rounded-full  transition-all ease`}
      ></div>
      <div className="flex justify-between z-50 ">
        {questionNumbers.map((num) => (
          <div
            key={uuid()}
            className={` ${
              num <= currentQuestion ? "bg-sky-600 border-white  text-white" : "bg-white"
            } font-bold z-50 border-sky-600 rounded-full flex items-center justify-center border-2 h-8 w-8`}
          >
            {num <= currentQuestion ? <Check className="font-extrabold" /> : num}
          </div>
        ))}
      </div>
    </div>
  );
}
