import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");

  const handleSend = () => {
    setTextValue("");
    navigate("/")
  };

  return (
    <div className="bg-black text-gray-300 p-8 max-w-3xl mx-auto mt-10 grid gap-8">
      <h1 className="text-3xl font-bold text-white mb-4">
        We are Emotion Music.
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        This website is a spontaneous creation by us, a group of students from
        Saigon University. Our goal in developing this site is to gain practical
        experience and to better prepare ourselves for future careers by
        tackling real-world scenarios.
      </p>
      <p className="text-lg leading-relaxed">
        Since this is a passion project, there are bound to be some
        shortcomings. However, we are committed to improving and refining this
        website every day.
      </p>
      <p className="mt-[20px] font-josefinSans font-light">
        <i>Feel free to let me know if you'd like any further adjustments!</i>
        <br />
        <textarea
          rows="4"
          cols="40"
          className="outline-none w-[300px] md:w-[600px] xl:w-[600px] p-[20px] resize-none text-white bg-gray-900 font-normal"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <br />
        <button
          onClick={handleSend}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </p>
    </div>
  );
}

export default About;
