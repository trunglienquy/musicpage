import { useEffect, useState } from 'react'
import { NavLink, useNavigate  } from 'react-router-dom';

function Header() {
    const [title, setTitle] = useState('How are you feeling today')
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTitle(title === 'How are you feeling today' ? 'Welcome to Emotional music' : 'How are you feeling today');
        }, 300000)
    },[title])

    return(
        <div className="w-full h-[120px] bg-[#1c1c1c] flex justify-between items-center text-white">
            <div className="font-inspiration font-normal text-[64px] px-[78px] py-0 cursor-pointer">
                <NavLink to="/" >Emotional music</NavLink> 
            </div>
            <div className='font-poppins font-extralight text-[25px]'>
                <p>{title}</p>
            </div>
            <div className="px-[30px] py-0 text-[20px] cursor-pointer w-[300px]">
                <ion-icon name="person-outline" onClick={() => navigate('/login')}>
                </ion-icon>
            </div>
        </div>
    )
}

export default Header