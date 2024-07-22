import "./styleLearn.css";

import video1 from "./video1.mp4";

function Learn() {
  return (
    <div className="container">
      <h1 className="musicToday">
        Music Today <br></br>{" "}
        <a
          className="linkVideo"
          href="https://www.youtube.com/watch?v=abPmZCZZrFA"
        >
          SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO
        </a>{" "}
      </h1>
      <video src={video1} width="600" autoPlay loop controls>
        <source src="video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="titleVideo">
        “The greatest happiness of life is the conviction that we are loved.” –
        Victor Hugo
      </p>
    </div>
  );
}

export default Learn;
