import Header from './components/Header/Header'
import Login from './components/Login/Login'
import MusicToday from './components/MusicToday/MusicToday'
import HappyEmotion from './components/pages/happyEmotion/HappyEmotion'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom';
import ProfileUser from './components/profileUser/ProfileUser'

function App() {

  return (
    <>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<MusicToday />}/>
        <Route path='/profile' element={<ProfileUser />}/>
        <Route path='/song' element={<HappyEmotion />} />
      </Routes>
        {/* Check login */}
        {/* {showLogin? <Login showLogin={setShowLogin}/> : <></>} */}

        

      </div>  
      <Toaster />
    </>
  );
}

export default App;
