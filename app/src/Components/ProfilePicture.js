import React from "react";

import "./ProfilePicture.css";

const ProfilePicture = ({ src, size }) => {
  return (
    <div className={`profilePicContainer ${size}`}>
      <div
        className={`profilePicture ${size}`}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};

export default ProfilePicture;
