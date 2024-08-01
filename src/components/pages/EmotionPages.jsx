import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApiSongEmotion } from "../../services/UserServices";
import "./EmotionPages.css";
import video from "../../assets/vbg_happy.mp4";

const HappyEmotion = () => {
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    //get URL page
    const queryParams = new URLSearchParams(location.search);
    //get parameter
    const emotionParam = queryParams.get("emotion");
    setEmotion(emotionParam);

    //need fix
    if (emotionParam) {
      getApiSongEmotion(emotionParam)
        .then((response) => {
          setSongs(response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [location.search]);

  return (
    <div className="containerEmotion">
      <video autoPlay loop muted playsInline className="backVideo">
        <source src={video} type="video/mp4" />
      </video>

      {/* <h1>Songs for Emotion: {emotion}</h1> */}
      {/* <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul> */}
    </div>
  );
};

export default HappyEmotion;
