import React, { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </div>
  );
}

export default SimpleForm;
