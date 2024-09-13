import { listEmotion } from "../../services/UserServices";
// import "./MusicToday.css";
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
      <div className="font-josefinSans text-[20px] text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[-50%] text-white">
        <span className="visually-hidden">Loading...</span>
        <br />
        <span>
          Click here to respond to us if you see the word Loading for 1 hour
        </span>
        <br />
        <button className="font-josefinSans mt-[10px] py-[10px] px-[40px] cursor-pointer bg-white text-black">
          Respond for us
        </button>
      </div>
    );

  return (
    <div className="block bg-black text-[14px] mx-auto my-[50px] p-0 max-w-[800px] h-[500px]">
      <h1 className="text-white text-center mb-[20px] font-josefinSans">
        Top Trending Music - VIETNAM <br />{" "}
        <a
          className="lg:text-[15px] xl:text-[15px] md:text-[15px] sm:text-[15px] text-white 350px:text-[10px]"
          href={`https://www.youtube.com/watch?v=${video.id}`}
        >
          {video.snippet.title}
        </a>
      </h1>
      <div className="flex justify-center items-center">
        <iframe
          className="sm:w-[560px] md:w-[700px] lg:w-full h-[315px] sm:h-[225px] md:h-[281px] lg:h-[315px]"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.snippet.title}
        ></iframe>
      </div>

      <div className="emotionContainer">
        <h2 className="text-white text-center mx-o my-[50px] font-josefinSans text-[50px] 350px:text-[25px]">
          How is your mood today
        </h2>
        <div className="w-[800px] flex justify-evenly items-center flex-wrap">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              className="w-[250px] h-[80px] text-[20px] rounded-[20px] mb-[40px] cursor-pointer border-none bg-[#1c1c1c] text-white"
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
