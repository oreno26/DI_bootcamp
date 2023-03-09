import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import ErrorBounday from "./Components/ErrorBoundary";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/profile">Profile </Link>
        <Link to="/Shop">Shop </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/Shop"
          element={
            <ErrorBounday>
              <Shop />
            </ErrorBounday>
          }
        />
      </Routes>

      <p>oren</p>
    </>
  );
};

export default App;
