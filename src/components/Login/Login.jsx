import { useState } from "react";
import "./Login.css";
import { loginApi } from "../../services/UserServices";
import { toast } from "react-hot-toast";

function Login({ showLogin }) {
  const [getUser, setGetUser] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [changeEye, setChangeEye] = useState("eye-off-outline");
  const [isLoggedIn, setIsLoggedIn] = useState(false); //need fix when F5 show login

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!getUser || !getPassword) {
      toast.error("Email or Password require");
      return;
    }
    try {
      let res = await loginApi(getUser, getPassword);
      console.log(">>>> check res: ", res);
      if (res && res.data.token) {
        toast.success("Login Success");
        localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      toast.error("User not found");
      setGetUser("");
      setGetPassword("");
    }
  };

  return (
    <>
      {!isLoggedIn && ( // Conditionally render the login form
        <div className="formLogin">
          <h1 style={{ color: "#fff" }}>Join with us</h1>
          {!isValidEmail(getUser) && getUser && (
            <span className="emailValidationMessage" style={{ color: "red" }}>
              Please enter a valid email address.
            </span>
          )}
          <div className="usernameInp">
            <ion-icon name="person-outline"></ion-icon>
            <input
              type="email"
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
              type={showPassword ? "text" : "password"}
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
                  setChangeEye(
                    changeEye === "eye-off-outline"
                      ? "eye-outline"
                      : "eye-off-outline"
                  );
                }}
              ></ion-icon>
            </div>
          </div>
          <button
            className={
              isValidEmail(getUser) && getPassword
                ? "active btnLogin"
                : "btnLogin"
            }
            onClick={handleLogin}
            disabled={!isValidEmail(getUser) || !getPassword}
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
      )}
    </>
  );
}

export default Login;
