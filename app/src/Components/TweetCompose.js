import React, { useState } from "react";
import michelangelo from "./profilepic.png";
import "./TweetCompose.css";
// import Feed from "./Feed";

const TweetCompose = ({ tweetFunction }) => {
  const [tweetBody, setTweetBody] = useState("");
  const handleTextUseChange = (onChangeEvent) =>
    setTweetBody(onChangeEvent.target.value);

  const handleSubmit = () => {
    tweetFunction("6m", tweetBody);
    setTweetBody("");
  };

  return (
    <div className="tweetCompose">
      <div className="profilePic">
        <img src={michelangelo} alt="profilepic" />
      </div>
      <div className="inputText">
        <textarea
          placeholder="What's Happening?"
          maxLength="280"
          cols="45"
          wrap="hard"
          value={tweetBody}
          onChange={handleTextUseChange}
        />
      </div>
      <div className="tweetComposeButtons">
        {/* dont think each button needs a div to be honest  */}
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
      <div className="tweetComposeButton">
        <button
          className="tweetButton"
          type="submit"
          disabled={!tweetBody}
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetCompose;
