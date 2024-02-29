import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ThankYou from "./Pages/ThankYou";
import Questionnaire from "./Pages/Questionnaire";
import Footer from "./components/Footer";

// import

function App() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="questions/" Component={Home} />
          <Route path="questions/Questionnaire" Component={Questionnaire} />
          <Route path="questions/ThankYou" Component={ThankYou} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
