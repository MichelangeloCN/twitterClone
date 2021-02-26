import React from "react";
import "./Header.css";
import profPic from "./profilepic.png";

import SideNavbar from './SideNavbar'
import ProfilePicture from "./ProfilePicture";

const Header = ({onClickHandler, BtnState}) => {
  
  return (
    <div className="Header">
      {BtnState? (
      <button
      className="NavButton"
      type="button"
      onClick={ onClickHandler }
      >
      <ProfilePicture src={profPic} size="small" id="headerProfilePic"  />
      </button>
      ) : (
        <SideNavbar onClickHandler={onClickHandler} BtnState={BtnState} />
      )}

      <h1>Home</h1>
      <i className="ri-star-s-line" />
    </div>
  );
};

export default Header;
