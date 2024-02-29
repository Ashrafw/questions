import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { AnsweredQuestionType, useStateStore } from "../zustand";
import { questions } from "../util/helper";
import QuestionItem from "../components/QuestionItem";
import { useNavigate } from "react-router-dom";
import LinearProgress from "../components/LinearProgress";
import { ApiService } from "../util/apiService";
import QuestionNavigation from "../components/QuestionNavigation";

export default function Questionnaire() {
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [answers, setAnswers] = useState<AnsweredQuestionType[]>([]);
  const navigate = useNavigate();
  const { setAnsweredQuestion } = useStateStore();
  useEffect(() => {
    if (answers.length === 0) {
      const res: AnsweredQuestionType[] = questions.map((item) => {
        return { ...item, response: "" };
      });
      setAnswers(res);
    }
  }, [questions]);
  const handleSubmit = () => {
    let hasUserAnsweredAll = answers.every((item) => item.response !== "");
    if (hasUserAnsweredAll) {
      ApiService(answers);
      setAnsweredQuestion(answers);
      navigate("/thankyou");
    }
  };
  return (
    <Wrapper>
      <div className="px-4">
        <div className="h-14"></div>

        <LinearProgress
          currentQuestion={questionNum}
          percentage={(questionNum / (answers.length - 1)) * 100}
          questionNumbers={Array.from(
            { length: answers.length },
            (_, index) => index + 1
          )}
        />
        <div className="h-14"></div>
        <div>
          {answers.length > 0 && (
            <QuestionItem question={answers[questionNum]} setAnswers={setAnswers} />
          )}
        </div>
        <QuestionNavigation
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          numberOfQuestion={answers.length}
          isAnswered={answers[questionNum]?.response.length === 0}
          handleSubmit={handleSubmit}
        />
      </div>
    </Wrapper>
  );
}
