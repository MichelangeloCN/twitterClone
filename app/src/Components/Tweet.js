import React from "react";
import "./Tweet.css";
import profilePicture from "./profilepic.png";
import InteractionBar from "./InteractionBar";
import ProfilePicture from "./ProfilePicture";
import ImageAttachment from "./ImageAttachment";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweetContainer">
      <div className="leftSide">
        <ProfilePicture src={profilePicture} size="medium" />
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
        {tweet.attachment ? (
          <ImageAttachment attachment={tweet.attachment} />
        ) : (
          ""
        )}
        <InteractionBar />
      </div>
    </div>
  );
};

export default Tweet;
