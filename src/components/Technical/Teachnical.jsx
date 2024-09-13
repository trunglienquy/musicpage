function Technical() {
    return (
      <div className="text-white bg-black p-20 w-[100rem]">
        <div className="frontend mb-8">
          <h1 className="text-[40px] font-bold mb-4">Frontend Developer</h1>
          <p className="text-gray-300 leading-relaxed mb-4">
            We primarily use <a href="https://react.dev/" className="hover:text-[#58C4DC] transition duration-300">ReactJS</a> in combination with <a href="https://tailwindcss.com/docs/installation" className="hover:text-[#38BDF8] transition duration-300">Tailwind CSS</a>. This website only employs fundamental hooks such as <a href="https://react.dev/reference/react/useState" className="hover:text-[#83D4C5] transition duration-300">useState</a> and <a href="https://react.dev/reference/react/useEffect" className="hover:text-[#83D4C5] transition duration-300">useEffect</a>. We also integrate components from <a href="https://react-bootstrap.github.io/" className="hover:text-[#712CF9] transition duration-300">Bootstrap</a>, utilize <a href="https://reactrouter.com/en/main/hooks/use-navigate" className="hover:text-[#CAC082] transition duration-300">useNavigate</a> for seamless page transitions without reloading, and incorporate <a href="https://www.npmjs.com/package/react-toastify" className="hover:text-[#f8f4de] transition duration-300">Toast</a> notifications to inform users of various actions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Regarding APIs, initially, we connect to our server through Radmin VPN—our server being a team member's machine. Additionally, we use the <span className="hover:text-red-500 transition duration-300">YouTube API</span> to fetch trending music videos, including relevant details like video titles and IDs.
            <br />
            To obtain the YouTube API, I followed a tutorial on YouTube by registering an account on Google Cloud and then following the video instructions to access the YouTube API.
            <br />
            <i>
              <a
                href="https://www.youtube.com/watch?v=LLAZUTbc97I"
                className="text-blue-400 hover:text-blue-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to the video
              </a>
            </i>
          </p>
        </div>
        <div className="backend">
          <h1 className="text-[40px] font-bold mb-4">Backend Developer</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    );
  }
  
  export default Technical;
  