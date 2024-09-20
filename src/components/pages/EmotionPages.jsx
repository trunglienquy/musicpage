import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApiSongEmotion } from "../../services/UserServices";
import { getInfoMusicVideo } from "../../services/FetchVideoYTTrend";
import video from "../../assets/vbg_happy.mp4";

const HappyEmotion = () => {
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const [randomSong, setRandomSong] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emotionParam = queryParams.get("emotion");
    console.log(emotionParam);
    setEmotion(emotionParam);
  }, [location.search]);

  useEffect(() => {
    const fetchSongs = async () => {
      if (emotion) {
        try {
          const response = await getApiSongEmotion(emotion);
          const songDisplay = response.data;
          setSongs(songDisplay);

          const randomIndex = Math.floor(Math.random() * songDisplay.length);
          setRandomSong(songDisplay[randomIndex]);
        } catch (error) {
          console.log("There was an error fetching songs!", error);
        }
      }
    };

    fetchSongs();
  }, [emotion]);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      if (randomSong) {
        try {
          const resultInfo = await getInfoMusicVideo(randomSong.yt_id);
          console.log(resultInfo);
          setVideoInfo(resultInfo);
        } catch (error) {
          console.log("There was an error fetching video info!", error);
        }
      }
    };

    fetchVideoInfo();
  }, [randomSong]);

  return (
    <>
      <div className="w-[100%] h-[300px] sm:h-[350px] lg:h-[700px] relative mt-[100px] lg:mt-[0px]">
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
            className="absolute left-[50%] top-[30%] xl:top-[50%]  lg:top-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-[560px] md:w-[700px] lg:w-full h-[315px] sm:h-[225px] md:h-[281px] lg:h-[500px]"
            src={`https://www.youtube.com/embed/${randomSong.yt_id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {videoInfo ? (
          <>
            <h1 className="text-white text-center text-[20px]">
              {videoInfo.snippet.title}
            </h1>
            <p className="text-white text-center"><a href={`https://www.youtube.com/watch?v=${videoInfo.id}`}>Click here change to Youtube</a></p>
          </>
        ) : (
          <p className="text-white text-center text-[20px]">
            Loading video information...
          </p>
        )}
      </div>
    </>
  );
};

export default HappyEmotion;
