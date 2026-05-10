import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mock API call
    fetch(`https://jsonplaceholder.typicode.com/posts/kdjkjkljkdj`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  if (!data) return <div>Loading...</div>;
  throw new Error("The call to get json data crashed!");
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default DataFetcher;
