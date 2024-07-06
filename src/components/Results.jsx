import React from "react";
import { BsTypeH4 } from "react-icons/bs";

export default function Results({ results }) {
  console.log(results[0]);
  // console.log(typeof(results))
  return (
    <div>
      {results.map((result) => (
        <>
          <div key={result?.id}>
            <h2>{result?.original_title}</h2>
          </div>
        </>
      ))}
    </div>
  );
}
