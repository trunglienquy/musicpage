import { useEffect, useState } from 'react'
import './Header.css'

function Header( {showLogin} ) {
    const [title, setTitle] = useState('How are you feeling today')
    useEffect(() => {
        setTimeout(() => {
            setTitle(title === 'How are you feeling today' ? 'Welcome to Emotional music' : 'How are you feeling today');
        }, 300000)
    },[title])

    console.log('re-render-header');

    return(
        <div className="navbar">
            <div className="title-page">
                <a href="#">Emotional music</a> 
            </div>
            <div className='emotion-user'>
                <p>{title}</p>
            </div>
            <div className="account">
                <span></span>
                <ion-icon name="person-outline" onClick={() => {
                    showLogin(true)
                }}>
                </ion-icon>
            </div>
        </div>
    )
}

export default Header