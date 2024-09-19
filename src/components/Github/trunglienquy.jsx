import { assets } from "../../assets/assets";

function Trunglienquy() {
  return (
    <div className="grid gap-6 font-medium text-[20px]">
      <h1 className="text-white">About me</h1>
      <p className="text-white">
        I am currently a part-time lecturer specializing in Scratch, GameMaker
        Studio, Python, and web programming. I am also pursuing a degree in
        High-Quality Information Technology at Saigon University. In addition to
        my academic and teaching roles, I am actively involved in exploring and
        developing web projects using cutting-edge technologies like ReactJS,
        Tailwind CSS, JavaScript, and Python. My passion for technology drives
        me to continually enhance my skills and contribute to innovative
        projects in the tech industry!.
      </p>
      <h1 className="text-white">This is my contribution</h1>
      <img
        src={assets.contribution}
        alt="GitHub Contribution Snake"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
export default Trunglienquy;
