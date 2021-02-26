import React from "react";
import "./MobileNavBar.css";

const MobileNavBar = () => {
  return (
    <div className="MobileNavBar">
      <i className="ri-home-7-fill" />
      <i className="ri-search-line" />
      <i className="ri-notification-3-line" id="notificationicon" />
      <i className="ri-mail-line" id="mailicon" />
    </div>
  );
};

export default MobileNavBar;
