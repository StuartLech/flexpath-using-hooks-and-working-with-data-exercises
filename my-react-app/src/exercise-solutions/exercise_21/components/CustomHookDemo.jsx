// src/components/CustomHookDemo.jsx
import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookDemo() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/3"
  );

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default CustomHookDemo;
