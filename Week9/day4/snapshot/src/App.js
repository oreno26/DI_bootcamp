import "./App.css";
import Page from "./components/page";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import BTN from "./components/button";
import { useState, useEffect } from "react";
function App() {
  let input = "";
  const [q,setQ] = useState('')

   const setSearch = (param) =>{
    setQ(`/search/${param}`)
   }


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Snap Shot</h1>
        <input
          type="text"
          onChange={(e) => {
            input = e.target.value;
             setSearch(input);
          }}
        />
        <button>
          <Link to={q}>search</Link>
        </button>
        <Routes>
          <Route path="/mountain" element={<Page theme="mountain" />} />
          <Route path="/beach" element={<Page theme="beach" />} />
          <Route path="/bird" element={<Page theme="bird" />} />
          <Route path="/food" element={<Page theme="food" />} />
          <Route path={`/search/:q`} element={<Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
