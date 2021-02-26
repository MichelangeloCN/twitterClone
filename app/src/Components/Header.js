import React from "react";
import "./Header.css";
import profPic from "./profilepic.png";
import ProfilePicture from "./ProfilePicture";

const Header = () => {
  return (
    <div className="Header">
      <ProfilePicture src={profPic} size="small" />
      <h1>Home</h1>
      <i className="ri-star-s-line" />
    </div>
  );
};

export default Header;
