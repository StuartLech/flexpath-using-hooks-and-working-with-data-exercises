// src/components/MemoizationDemo.jsx
import React, { useState, useMemo } from "react";

function MemoizationDemo() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // Simulate heavy computation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Calculated Value: {calculatedValue}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setToggle(!toggle)}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
}

export default MemoizationDemo;
