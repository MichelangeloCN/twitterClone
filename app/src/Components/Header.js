import React from 'react';
import './Header.css';
import profPic from './profilepic.png'

const Header = () => {
    return (
        <div className="Header">
            <img src={profPic} id="profilePic" />
                <h1>Home</h1>
       </div>
    )
}
 
export default Header;