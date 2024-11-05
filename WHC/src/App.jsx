import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Storyblog from "./pages/Storyblog";
import Resources from "./pages/Resources";
import Chatbot from "./pages/Chatbot";
import Health from "./pages/Health";
import Education from "./pages/Education";
import Challenges from "./pages/Challenges";
import GenderEquality from "./pages/GenderEquality";
import ChildAndAdult from "./pages/ChildAndAdult";

function App() {
  // const API_KEY = `AIzaSyAeU8QRUE6k4MSnFzvyqlkPr4a0-TneNWo`; gemini api

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat-bot" element={<Chatbot />} />
        <Route path="/story-blog" element={<Storyblog />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources-health" element={<Health />} />
        <Route path="/resources-education" element={<Education />} />
        <Route path="/resources-challenges" element={<Challenges />} />
        <Route path="/resources-gender-equality" element={<GenderEquality />} />
        <Route path="/resources-child-and-adult" element={<ChildAndAdult/>} />
      </Routes>
    </>
  );
}

export default App;
