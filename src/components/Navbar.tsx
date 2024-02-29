import { Pill } from "lucide-react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="border-b shadow">
      <Wrapper>
        <div className="flex items-center gap-2 px-4">
          <Pill />
          <Link to={"/"}>
            <h1 className="text-3xl font-semibold">
              Med<span className="text-blue-700">Express</span>
            </h1>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
