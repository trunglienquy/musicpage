import "./MusicToday.css";

function Learn() {
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
    </div>
  );
}

export default Learn;
