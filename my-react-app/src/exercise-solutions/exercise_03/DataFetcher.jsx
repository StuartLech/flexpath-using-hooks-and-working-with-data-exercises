import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock API call
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${Math.ceil(
        Math.random() * 100
      )}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default DataFetcher;
