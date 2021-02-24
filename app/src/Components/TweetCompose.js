import React from "react";
import michelangelo from "./profilepic.png";
import "./TweetCompose.css";

const TweetCompose = () => {
  return (
    <div className="tweetCompose">
      <div className="profilePic">
        <image src={michelangelo} />
      </div>

      <div className="inputText">
        <input type="text" />
      </div>

      <div className="tweetComposeIcons">
        <div className="media">
          <i className="ri-image-line"> </i>
        </div>
        <div className="GIF">
          <i className="ri-file-gif-line"> </i>
        </div>
        <div className="poll">
          <i className="ri-bar-chart-2-line" />
        </div>
        <div className="emoji">
          <i className="ri-emotion-happy-line"> </i>
        </div>
        <div className="schedule">
          <i className="ri-calendar-todo-line"> </i>
        </div>
      </div>

      <div>
        <button className="tweetComposeButton" type="submit">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetCompose;
