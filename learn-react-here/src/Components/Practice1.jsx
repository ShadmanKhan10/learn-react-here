import React, { useState, useEffect } from "react";

export default function Practice1() {
  const [clock, setClock] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock((prevClock) => prevClock + 1);
    }, 1000);
    if (clock === 20) {
      setStop(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stop]);

  return (
    <div>
      <h1>{clock}</h1>
    </div>
  );
}
