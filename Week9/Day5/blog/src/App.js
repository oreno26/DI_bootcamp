import logo from "./logo.svg";
import "./App.css";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Post from "./components/Post";
import About from "./components/About";
import { reducer } from "./Redux/Reducer";

const store = createStore(reducer);
function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Navbar />

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/:id" element={<Post />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

// const mapStateToProps = (state) =>{
//   // return
// }

export default App
