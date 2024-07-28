import "./ProfileUser.css";
import toast from "react-hot-toast";
import { getUserInfo } from "../../services/UserServices";
import { useEffect, useState } from "react";

function ProfileUser() {
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
        setNameUser(res.data.name)
        setEmailUser(res.data.email)
        console.log("User Info: ", res.data);
        // Handle the user info here
      } catch (error) {
        console.error("Error fetching user info: ", error);
        toast.error("Failed to fetch user info");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerPro">
      <div className="imgProfile">
        <img
          src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/45901944_964430937078341_8738149665662304256_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lbYhqHgvcUIQ7kNvgE9rkr7&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCEkKTYluzupDfqyQfk3bNWd376BokrIWPksYKnbLJtXQ&oe=66C5D602"
          alt="ImageAVT"
        />
      </div>
      <p className="roleProfile">Member</p>
      <p className="nameProfile">{nameUser}</p>
      <p className="nameProfile">{emailUser}</p>
    </div>
  );
}

export default ProfileUser;
