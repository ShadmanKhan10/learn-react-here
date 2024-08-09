import React from "react";
import "./App.css";
import Practice1 from "./Components/Practice1";
import Practice2 from "./Components/Practice2";

function App() {
  return (
    <>
      <Practice1 />
      <Practice2 display={true} />
    </>
  );
}

export default App;
