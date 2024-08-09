// import React, { useState } from "react";

// export default function Practice1() {
//   const [stop, setStop] = useState(false);

//   const time = setInterval(() => {

//     console.log("this is me");
//     console.log("Current Status:", stop);
//     if (stop) {
//         clearInterval(time);
//       }
//   }, 1000);

//   const handleClick = () => {
//     setStop(true);
//   };
//   return (
//     <div>
//       <h1>Practicing one</h1>
//       <button onClick={handleClick}>Stop</button>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function Practice1() {
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("this is me");
      console.log("Current Status:", stop);
      if (stop) {
        clearInterval(interval); // Stops the interval when 'stop' is true
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [stop]); // Dependency array ensures the interval is cleared when 'stop' changes

  const handleClick = () => {
    setStop(true); // Triggers the interval to stop
  };

  return (
    <div>
      <h1>Practicing one</h1>
      <button onClick={handleClick}>Stop</button>
    </div>
  );
}
