import profileImage from "./img/doggy.jpeg";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"> HomePage </Link>
        <Link to="/aboutme"> AboutMe </Link>
        <Link to="/contactme"> ContactMe </Link>
        <Link to="/projects"> Projects </Link>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
