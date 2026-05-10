import React, { useState } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(0);

  const square = number * number;

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
    </div>
  );
}

export default SquareCalculator;
