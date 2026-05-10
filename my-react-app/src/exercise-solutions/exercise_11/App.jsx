import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import SimpleForm from "./components/SimpleForm";
import EventLogger from "./components/EventLogger";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/user/1">User 1</Link> | <Link to="form">Simple Form</Link> |
        <Link to="/logger">Event logger</Link>
      </nav>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/logger" element={<EventLogger />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
