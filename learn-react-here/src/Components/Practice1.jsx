import React, { useState, useEffect } from "react";

export default function Practice1() {
  const [clock, setClock] = useState(0);
  const word =
    "kshkjhksjhkjhjshkjhjkhjkhskjhkjshdkjfhkjshfkjshfkjhkjshkjhsdkjhkjhkjdhk";

  useEffect(() => {
    const interval = setInterval(() => {
      setClock((prevClock) => {
        if (prevClock >= 19) {
          // Check if the clock has reached 20
          clearInterval(interval); // Stop the interval
          return prevClock; // Return the same value to stop incrementing
        }
        return prevClock + 1; // Increment clock
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []); // Empty dependency array so this runs only once

  return (
    <div>
      <h1>{clock}</h1>
      {word.length > 5 ? <p>{word.substring(0, 5)}...</p> : <p>{word}</p>}
    </div>
  );
}
