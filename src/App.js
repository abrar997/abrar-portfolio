import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// comp
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Navbar from "./component/Navbar/Navbar";
//style
import "./App.css";
import SkillsExperinece from "./component/SkillsExperinece/SkillsExperinece";
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="*" index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SkillsExperinece" element={<SkillsExperinece />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
