import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/c">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/c" element={<Contact />} />
      </Routes>
    </>
  );
};

// export default App;
