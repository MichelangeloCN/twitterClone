import React from "react";

import InteractionBar from "./InteractionBar";

const Tweet = ({ tweet }) => {
  return (
    <div className="TweetContainer">
      <div className="tweetHeader" />
      <div className="profileImg" />
      <div className="tweetTitle">
        <span className="userName">{tweet.userName}</span>
        <span className="handle">{tweet.handle}</span>
        <span> - </span>
        <span className="tweetTimestamp">{tweet.timestamp}</span>
      </div>
      <div className="tweetBody">{tweet.body}</div>
      <InteractionBar />
    </div>
  );
};

export default Tweet;
