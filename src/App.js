
import { useState } from 'react';
import Header from './Header/Header'
import Login from './Login/Login'

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="App">
      <Header showLogin={setShowLogin}/>

      {/* Check login */}
      {showLogin? <Login showLogin={setShowLogin}/> : <></>}
    </div>
  );
}

export default App;
