import React from "react";

function EventLogger() {
  const handleClick = (e) => {
    console.log("Event type:", e.type);
    console.log("Button clicked:", e.target);
  };

  return <button onClick={handleClick}>Log Event Details</button>;
}

export default EventLogger;
