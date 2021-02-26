import React from "react";

import "./ProfilePicture.css";

const ProfilePicture = ({ src, size, id }) => {
  return (
    <div id={id} className={`profilePicContainer ${size}`}>
      <div
        className={`profilePicture ${size}`}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};

export default ProfilePicture;
