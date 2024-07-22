import { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate  } from 'react-router-dom';
import Tippy from "@tippyjs/react";


function Header() {
    const [title, setTitle] = useState('How are you feeling today')
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTitle(title === 'How are you feeling today' ? 'Welcome to Emotional music' : 'How are you feeling today');
        }, 300000)
    },[title])

    console.log('re-render-header');

    return(
        <div className="navbar">
            <div className="title-page">
                <a href="/" >Emotional music</a> 
            </div>
            <div className='emotion-user'>
                <p>{title}</p>
            </div>
            <div className="account">
                <span></span>
                <Tippy content="" placement='right'>
                    <ion-icon name="person-outline" onClick={() => navigate('/login')}>
                    </ion-icon>
                </Tippy>
            </div>
        </div>
    )
}

export default Header