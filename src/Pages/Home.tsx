import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

type Props = {};

export default function Home({}: Props) {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className=" text-center">
          <h1 className="font-bold text-6xl px-4 text-center mb-8">
            Welcome to Med<span className=" text-blue-700">Express</span>
          </h1>
          <h2 className="font-bold text-3xl px-4 text-center  text-gray-600">
            {" "}
            where your well-being is our priority.{" "}
          </h2>
          <p className=" text-gray-600 text-lg mt-2">
            Experience personalized and expert healthcare from the comfort of your home.
          </p>
        </div>
        <Link
          to={"/Questionnaire"}
          className="py-2 mt-10 px-6 shadow font-semibold rounded bg-blue-700 hover:bg-blue-800 text-slate-200"
        >
          Start Consultation
        </Link>
      </div>
    </Wrapper>
  );
}
