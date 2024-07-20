import { useState } from "react";
import "./Login.css";
function Login({ showLogin }) {
  const [getUser, setGetUser] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [changeEye, setChangeEye] = useState("eye-off-outline");

  const handleLogin = () => {
    const objUser = {
      username: getUser,
      password: getPassword,
    };
    console.log(objUser);
  };

  return (
    <>
      <div className="formLogin">
        <h1 style={{ color: "#fff" }}>Join with us</h1>
        <div className="usernameInp">
          <ion-icon name="person-outline"></ion-icon>
          <input
            value={getUser}
            placeholder="Email"
            onChange={(e) => {
              setGetUser(e.target.value);
            }}
          />
        </div>
        <div className="passwordInp">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type={showPassword === true ? "text" : "password"}
            value={getPassword}
            placeholder="Password"
            onChange={(e) => {
              setGetPassword(e.target.value);
            }}
          />
          <div className="iShow">
            <ion-icon
              name={changeEye}
              onClick={() => {
                setShowPassword(!showPassword);
                changeEye === "eye-off-outline"
                  ? setChangeEye("eye-outline")
                  : setChangeEye("eye-off-outline");
              }}
            ></ion-icon>
          </div>
        </div>
        <button
          className={getUser && getPassword ? "active btnLogin" : "btnLogin"}
          onClick={handleLogin}
          disabled={getPassword && getUser ? false : true}
        >
          LOGIN
        </button>
        <br></br>
        <div className="closeTab">
          <ion-icon
            name="close-outline"
            className="closeLogin"
            onClick={() => {
              showLogin(false);
            }}
          ></ion-icon>

        </div>
      </div>
    </>
  );
}

export default Login;
