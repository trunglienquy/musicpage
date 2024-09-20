import toast from "react-hot-toast";
import { getUserInfo } from "../../services/UserServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileUser() {
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Please login first");
      return;
    }

    const fetchData = async () => {
      try {
        let res = await getUserInfo(token);
        setNameUser(res.data.name);
        setEmailUser(res.data.email);
        console.log("User Info: ", res.data);
        // Handle the user info here
      } catch (error) {
        console.error("Error fetching user info: ", error);
        toast.error("Failed to fetch user info");
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="w-[300px] h-[700px] sm:w-[400px] lg:w-[500px]  xl:w-[500px] block my-[50px] mx-auto bg-[rgb(15,15,15)] rounded-[50px] text-center font-josefinSans text-[20px] text-white">
      <div className="block w-[150px] h-[150px] my-[50px] mx-auto pt-[20px]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="ImageAVT"
          className="rounded-[50%] w-[150px] h-[150px] object-cover mt-[50px]"
        />
      </div>
      <p className="mb-[50px] mt-[120px]">Member</p>
      <p className="text-white">{nameUser}</p>
      <p className="text-white">{emailUser}</p>
      <button
        className="mt-[100px] bg-white text-black w-[200px] h-[50px] p-[2px] rounded-[20px]"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
}

export default ProfileUser;
