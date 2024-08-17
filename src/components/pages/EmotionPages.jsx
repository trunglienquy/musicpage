import React, { useEffect, useState } from "react";
import { useFetchers, useLocation } from "react-router-dom";
import { getApiSongEmotion } from "../../services/UserServices";
import video from "../../assets/vbg_happy.mp4";

const HappyEmotion = () => {
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const [randomSong, setRandomSong] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emotionParam = queryParams.get("emotion");
    console.log(emotionParam);
    setEmotion(emotionParam);
  }, [location.search]);

  useEffect(() => {
    // if (emotion) {
    //   getApiSongEmotion(emotion)
    //     .then((response) => {
    //       const songDisplay = response.data;
    //       setSongs(songDisplay);

    //       const randomIndex = Math.floor(Math.random() * songDisplay.length);
    //       setRandomSong(songDisplay[randomIndex]);
    //     })
    //     .catch((error) => {
    //       console.error("There was an error!", error);
    //     });
    // }
    if (emotion) {
      const fetchVideo = async () => {
        try {
          const response = await getApiSongEmotion(emotion);
          const songDisplay = response.data;
          setSongs(songDisplay);

          const randomIndex = Math.floor(Math.random() * songDisplay.length);
          setRandomSong(songDisplay[randomIndex]);
        } catch (error) {
          console.log("There was an error!", error);
        }
      };
      fetchVideo();
    }
  }, [emotion]);

  console.log(randomSong);

  return (
    <div className="containerEmotion">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute right-0 bottom-0 z-[-1] object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      {randomSong ? (
        <iframe
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[1000px] h-[500px]"
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
