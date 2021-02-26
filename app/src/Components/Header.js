import React, {useState} from "react";
import "./Header.css";
import profPic from "./profilepic.png";

import SideNavbar from './SideNavbar'
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  
  const [buttonState, setButtonState] = useState(true);
  const [navState, setNavState] = useState(true);

  return (
    <div className="Header">
      {buttonState ? (
      <button
      className="NavButton"
      type="button"
      onClick={() => {
      setButtonState(!buttonState);
      setNavState(!navState);
      }}
      >
      <ProfilePicture src={profPic} size="small" id="headerProfilePic"  />
      </button>
      ) : (
        <SideNavbar />
      )}

      <h1>Home</h1>
      <i className="ri-star-s-line" />
    </div>
  );
};

export default Header;
