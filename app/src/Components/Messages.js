import React from "react";
import Collapsible from "react-collapsible";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="flexContainer">
      <Collapsible id="Messages" trigger="Messages" i className="ri-mail-line">
        <div className="Message-1">
          <p className="title">Raphael</p>
          <p className="date">21st Feb 2021</p>
          <p className="message">SEE YOU TOMORROW!</p>
        </div>
        <div className="Message-2">
          <p className="title">Donatello</p>
          <p className="date">19th Feb 2021</p>
          <p className="message">COWABUNGA!</p>
        </div>
        <div className="Message-3">
          <p className="title">Leonardo</p>
          <p className="date">21st Feb 2021</p>
          <p className="message">Yeah, lets play Buck Buck!</p>
        </div>
      </Collapsible>
    </div>
  );
};

export default Messages;
