import { useState } from "react";
import "./MusicToday.css";

function Learn() {


  const handleButtonEmotion = (value) => {
    const emotionButton = {
      name: value
    }
    console.log(emotionButton);
  }

  return (
    <div className="container">
      <h1 className="musicToday">
        Music Today <br />{" "}
        <a
          className="linkVideo"
          href="https://www.youtube.com/watch?v=abPmZCZZrFA"
        >
          SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO
        </a>
      </h1>
      <iframe className="video"
        width="600"
        height="315"
        src="https://www.youtube.com/embed/abPmZCZZrFA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="titleVideo">
        “The greatest happiness of life is the conviction that we are loved.” – Victor Hugo
      </p>



      <div className="emotionContainer">
        <h2>How is your mood today</h2>
        <div className="btnEmotion">
          <button className="btnElement" onClick={() => {handleButtonEmotion('Happy')}}>Happy</button>
          <button className="btnElement" onClick={() => {handleButtonEmotion('Sad')}}>Sad</button>
          <button className="btnElement" onClick={() => {handleButtonEmotion('Swag')}}>Swag</button>
        </div>
      </div>
    </div>
  );
}

export default Learn;
