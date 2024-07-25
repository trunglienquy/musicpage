import './ProfileUser.css'
import { useNavigate } from "react-router-dom";

function ProfileUser() {
  const navigate = useNavigate();
    return(
        <div className='containerPro'>
            <div className='imgProfile'>
                <img src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/45901944_964430937078341_8738149665662304256_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lbYhqHgvcUIQ7kNvgE9rkr7&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYCEkKTYluzupDfqyQfk3bNWd376BokrIWPksYKnbLJtXQ&oe=66C5D602' alt='ImageAVT'/>
            </div>
            <p className='roleProfile'>Member</p>
            <p className='nameProfile'>{localStorage.getItem("nameUser")}</p>
            <p className='developer'>Hiện tại trang web vẫn còn đang trong quá trình phát triển, nên các chức năng chưa thật sự đầy đủ. 
            <br/>
            Xin lỗi vì sự bất tiện này!</p>
            <button className='backHome' onClick={() => navigate('/')}>Enjoy Music Now!</button>
        </div>
    )
}

export default ProfileUser