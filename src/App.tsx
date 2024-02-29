import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";
import Questionnaire from "./Pages/Questionnaire";

// import

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Questionnaire" Component={Questionnaire} />
        <Route path="/ThankYou" Component={ThankYou} />
      </Routes>
    </div>
  );
}

export default App;
