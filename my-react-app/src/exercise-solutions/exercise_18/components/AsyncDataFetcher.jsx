import React, { useState, useEffect } from "react";

function AsyncDataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock API call
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/2"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default AsyncDataFetcher;
