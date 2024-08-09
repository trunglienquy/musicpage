import { useEffect, useState } from 'react'
import './Header.css'
import { NavLink, useNavigate  } from 'react-router-dom';
import Tippy from "@tippyjs/react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    const [title, setTitle] = useState('How are you feeling today')
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTitle(title === 'How are you feeling today' ? 'Welcome to Emotional music' : 'How are you feeling today');
        }, 300000)
    },[title])

    return(
        <div className="navbar">
            <div className="title-page">
                <NavLink style={{backgroundColor: '#1c1c1c'}} to="/" >Emotional music</NavLink> 
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