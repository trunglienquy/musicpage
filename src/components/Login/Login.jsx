import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginApi } from "../../services/UserServices";
import { toast } from "react-hot-toast";


function Login() {
  const navigate = useNavigate();
  const [getUser, setGetUser] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [changeEye, setChangeEye] = useState("eye-off-outline");
   //need fix when F5 show login

   useEffect(()=>{
    let token = localStorage.getItem("token")
    if (token){
      navigate('/profile')
    }
   },[])

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
        navigate('/profile')
      }
    } catch (error) {
      toast.error("User not found");
      setGetUser("");
      setGetPassword("");
    }
  };

  return (
    <>
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
              onClick={() => navigate('/')}
            ></ion-icon>
          </div>
        </div>
    </>
  );
}

export default Login;
