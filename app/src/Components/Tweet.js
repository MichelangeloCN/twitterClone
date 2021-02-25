import React from "react";
import "./Tweet.css";
import profilePicture from "./profilepic.png";
import InteractionBar from "./InteractionBar";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweetContainer">
      <div className="leftSide">
        <div className="profileImg">
          <img src={profilePicture} alt="profile" />
        </div>
      </div>
      <div className="tweetMain">
        <div className="tweetHeader" />
        <div className="tweetTitle">
          <span className="userName">{tweet.userName}</span>
          <span className="handle secondaryText">{tweet.handle}</span>
          <span className="secondaryText"> - </span>
          <span className="tweetTimestamp secondaryText">
            {tweet.timeStamp}
          </span>
          <button type="button" className="tweetMoreButton">
            <i className="ri-more-fill" />
          </button>
        </div>
        <div className="tweetBody mainText">{tweet.body}</div>
        <InteractionBar />
      </div>
    </div>
  );
};

export default Tweet;
