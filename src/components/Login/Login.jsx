import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi, loginAdmin } from "../../services/UserServices";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const [getUser, setGetUser] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [changeEye, setChangeEye] = useState("eye-off-outline");

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        console.log(decodedToken.exp);
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          navigate("/profile");
        }
      } catch (error) {
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        try {
          let checkAdmin = await loginAdmin(res.data.token);
          if (checkAdmin.status === 200) {
            navigate("/admin");
            return;
          }
        } catch (error) {
          if (res.status === 200){
            toast.success("Login Success");
            localStorage.setItem("authToken", res.data.token);
            navigate("/profile");
          }
        }
      }
    } catch (error) {
      toast.error("User not found");
      setGetUser("");
      setGetPassword("");
    }
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x--1/2 -translate-y--7/10 font-oswald font-medium block mt-[100px] mb-[100px] mx-auto w-[300px] h-[450px] xl:w-[400px] md:w-[400px] bg-[rgb(13,13,13)] text-center pt-[20px]">
        <h1 className="text-white mb-[50px] text-[30px]">Join with us</h1>
        {!isValidEmail(getUser) && getUser && (
          <span className="text-red-500">
            Please enter a valid email address.
          </span>
        )}
        <div className="relative h-[70px] ml-[15px]">
          <input
            type="email"
            value={getUser}
            placeholder="Email"
            onChange={(e) => {
              setGetUser(e.target.value);
            }}
            className="p-[20px] w-[250px] xl:w-[300px] md:w-[300px] h-[20px] outline-none bg-black text-white border-none"
          />
        </div>
        <div className="relative h-[70px] ml-[15px]">
          <input
            type={showPassword ? "text" : "password"}
            value={getPassword}
            placeholder="Password"
            onChange={(e) => {
              setGetPassword(e.target.value);
            }}
            className="p-[20px] w-[250px] xl:w-[300px] md:w-[300px] h-[20px] outline-none bg-black text-white border-none"
          />
          <div className="absolute top-[10px] right-[50px] cursor-pointer text-white">
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
              className="cursor-pointer"
            ></ion-icon>
          </div>
        </div>
        <button
          className={`${
            isValidEmail(getUser) && getPassword
              ? "font-oswald font-medium bg-red-500 text-white"
              : "bg-[#c1c1c1] text-black"
          } font-oswald font-medium cursor-pointer text-[20px] w-[250px] xl:w-[300px] md:w-[300px] h-[30px] mt-[30px] border-none transition-all duration-500`}
          onClick={handleLogin}
          disabled={!isValidEmail(getUser) || !getPassword}
        >
          LOGIN
        </button>
        <br></br>
        <div className="closeTab cursor-pointer text-[40px] text-white mt-[20px]">
          <ion-icon
            name="close-outline"
            className="closeLogin"
            onClick={() => navigate("/")}
          ></ion-icon>
        </div>
      </div>
    </>
  );
}

export default Login;
