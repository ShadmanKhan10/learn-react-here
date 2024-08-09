import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("File Name: ", file.name);
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
        <img src={file} alt="file" />
      </form>
    </>
  );
}

export default App;
