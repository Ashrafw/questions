import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";
import Questionnaire from "./Pages/Questionnaire";

// import

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="questions/" Component={Home} />
        <Route path="questions/Questionnaire" Component={Questionnaire} />
        <Route path="questions/ThankYou" Component={ThankYou} />
      </Routes>
    </div>
  );
}

export default App;
