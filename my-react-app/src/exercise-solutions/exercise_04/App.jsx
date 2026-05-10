import "./App.css";
import React from "react";
import DataFetcher from "./components/DataFetcher";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <DataFetcher />
      </ErrorBoundary>
    </div>
  );
}

export default App;
