import React from "react";

import "./ProfilePicture.css";

const ProfilePicture = ({ src }) => {
  return (
    <div className="profilePicContainer">
      <img src={src} alt="profile pic" />
    </div>
  );
};

export default ProfilePicture;
