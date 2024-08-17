import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MusicToday from "./components/MusicToday/MusicToday";
import EmotionPages from "./components/pages/EmotionPages";
import Page404 from "./components/Page404/Page404";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import ProfileUser from "./components/profileUser/ProfileUser";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MusicToday />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/song" element={<EmotionPages />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* Check login */}
        {/* {showLogin? <Login showLogin={setShowLogin}/> : <></>} */}
      </div>
      <Toaster />
    </>
  );
}

export default App;
