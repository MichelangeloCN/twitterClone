import React from "react";
import "./TweetButton.css";

const TweetButton = () => {


  return (
    <div className="tweet-button">
        <button
          className="TweetButton"
          id="desktop"
          type="button"
          >
           <i className="ri-quill-pen-fill" id="tweetbutton" />
        </button>
  
        <h3 id="desktopTweet">Tweet</h3>
    </div>
  );
};
export default TweetButton;
