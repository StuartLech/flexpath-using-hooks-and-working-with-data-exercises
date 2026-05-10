import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import SimpleForm from "./components/SimpleForm";
import EventLogger from "./components/EventLogger";
import AsyncDataFetcher from "./components/AsyncDataFetcher";
import EnhancedDataFetcher from "./components/EnhancedDataFetcher";
import CallbackDemo from "./components/CallbackDemo";
import MemoizationDemo from "./components/MemoizationDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import ReducerCounter from "./components/ReducerCounter";
import DebouncedInput from "./components/DebouncedInput";
import ThrottledScrollLogger from "./components/ThrottledScrollLogger";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/user/1">User 1</Link> | <Link to="form">Simple Form</Link> |
        <Link to="/logger">Event logger</Link> |{" "}
        <Link to="/async">Async Data Fetcher</Link> |
        <Link to="/enhanced">Enhanced Data Fetcher</Link> |
        <Link to="/use-callback">useCallback Demo</Link> |
        <Link to="/use-memo">useMemo Demo</Link> |
        <Link to="/use-custom-hook">Custom Hook Demo</Link> |
        <Link to="/reducer-counter">Reducer Counter</Link> |
        <Link to="/debounce-input">Debounced Input</Link> |
        <Link to="/throttle-scroll">Throttled Scroll Logger</Link> |
      </nav>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<SimpleForm />} />
        <Route path="/logger" element={<EventLogger />} />
        <Route path="/async" element={<AsyncDataFetcher />} />
        <Route path="/enhanced" element={<EnhancedDataFetcher />} />
        <Route path="/use-callback" element={<CallbackDemo />} />
        <Route path="/use-memo" element={<MemoizationDemo />} />
        <Route path="/use-custom-hook" element={<CustomHookDemo />} />
        <Route path="/reducer-counter" element={<ReducerCounter />} />
        <Route path="/debounce-input" element={<DebouncedInput />} />
        <Route path="/throttle-scroll" element={<ThrottledScrollLogger />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
