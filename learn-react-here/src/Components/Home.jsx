import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1 className="heading">Schedule your next match here</h1>
        <p className="tagline">Win or Lose, never stop playing!</p>
        <div className="sports-container">
          <span className="sport">Football</span>
          <span className="sport">Cricket</span>
          <span className="sport">Badminton</span>
          <span className="sport">Console Games</span>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/4/Ronaldo-FIFA-PNG-Image.png"
          className="home-image"
          alt="image"
        />
      </div>
    </div>
  );
}
