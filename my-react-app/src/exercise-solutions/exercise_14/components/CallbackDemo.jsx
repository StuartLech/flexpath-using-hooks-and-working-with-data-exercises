// src/components/CallbackDemo.jsx
import React, { useState, useCallback } from "react";

function Button({ handleClick, label }) {
  console.log(`Rendering button: ${label}`);
  return <button onClick={handleClick}>{label}</button>;
}

const MemoizedButton = React.memo(Button);

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <MemoizedButton handleClick={increment} label="Increment" />
      <MemoizedButton handleClick={decrement} label="Decrement" />
    </div>
  );
}

export default CallbackDemo;
