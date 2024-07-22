import { useState } from 'react';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import MusicToday from './components/MusicToday/MusicToday'
import { Toaster } from 'react-hot-toast'


function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <div className="App">
        <Header showLogin={setShowLogin}/>
        {/* Check login */}
        {showLogin? <Login showLogin={setShowLogin}/> : <></>}

        <MusicToday />

      </div>  
      <Toaster />
    </>
  );
}

export default App;
