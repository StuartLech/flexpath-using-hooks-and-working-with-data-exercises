import React, { useEffect } from "react";

function ThrottledScrollLogger() {
  useEffect(() => {
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime >= 500) {
        console.log("Scroll position:", window.scrollY);
        lastScrollTime = now;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={{ height: "200vh" }}>Scroll to see the effect</div>;
}

export default ThrottledScrollLogger;
