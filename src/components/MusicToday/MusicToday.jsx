import { listEmotion } from "../../services/UserServices";
import "./MusicToday.css";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTrendingVideos } from "../../services/FetchVideoYTTrend";

function Learn() {
  const navigate = useNavigate();
  const [emotions, setEmotions] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const trendingVideo = await fetchTrendingVideos();
      setVideo(trendingVideo);
    };
    fetchVideo();
  }, []);

  useEffect(() => {
    const getDataEmotion = async () => {
      try {
        const data = await listEmotion();
        setEmotions(data.data);
      } catch (error) {
        console.error("Error fetching emotions:", error);
      }
    };
    getDataEmotion();
  }, []);
  const handleButtonEmotion = (value) => {
    const emotionButton = {
      name: value,
    };
    navigate(`/song?emotion=${value}`);
    console.log(emotionButton);
  };

  if (!video)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <div className="container">
      <h1 className="musicToday">
        Music Today <br />{" "}
        <a
          className="linkVideo"
          href={`https://www.youtube.com/watch?v=${video.id}`}
        >
          {video.snippet.title}
        </a>
      </h1>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.snippet.title}
      ></iframe>
      <p className="titleVideo">
        “The greatest happiness of life is the conviction that we are loved.” –
        Victor Hugo
      </p>

      <div className="emotionContainer">
        <h2>How is your mood today</h2>
        <div className="btnEmotion">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              className="btnElement"
              onClick={() => {
                handleButtonEmotion(emotion.name);
              }}
            >
              {emotion.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;
