import React, { useState, useEffect } from "react";

function DebouncedInput() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(inputValue), 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue) {
      // Make API call with debouncedValue
      console.log("Making API call with:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <h2>Debounced Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search"
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DebouncedInput;
