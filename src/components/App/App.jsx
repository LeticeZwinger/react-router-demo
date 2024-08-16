import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import "./App.css";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
