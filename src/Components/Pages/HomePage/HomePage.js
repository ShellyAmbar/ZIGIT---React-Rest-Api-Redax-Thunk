import React from "react";
import video from "../../../videos/video.mov";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="containerHome">
      <video className="video" autoPlay loop muted src={video}></video>
      <div className="title">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default HomePage;
