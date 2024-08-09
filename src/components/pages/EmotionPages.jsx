import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApiSongEmotion } from "../../services/UserServices";
import "./EmotionPages.css";
import video from "../../assets/vbg_happy.mp4";

const HappyEmotion = () => {
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const [randomSong, setRandomSong] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emotionParam = queryParams.get("emotion");
    setEmotion(emotionParam);

    if (emotionParam) {
      getApiSongEmotion(emotionParam)
        .then((response) => {
          const songDisplay = response.data;
          setSongs(songDisplay);

          const randomIndex = Math.floor(Math.random() * songDisplay.length);
          setRandomSong(songDisplay[randomIndex]);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [location.search]);

  console.log(randomSong);

  return (
    <div className="containerEmotion">
      <video autoPlay loop muted playsInline className="backVideo">
        <source src={video} type="video/mp4" />
      </video>
      {randomSong ? (
        <iframe
          className="videoSong"
          width="600"
          height="315"
          src={`https://www.youtube.com/embed/${randomSong.yt_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading...</p> // You can replace this with a loading spinner or any other placeholder
      )}
    </div>
  );
};

export default HappyEmotion;
