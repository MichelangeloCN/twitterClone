import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import michelangelo from "./profilepic.png";
import ProfilePicture from "./ProfilePicture";
import "./TweetCompose.css";
// import Feed from "./Feed";

const TweetCompose = ({ tweetFunction, placeHolder="What's Happening?", submit="Tweet"}) => {
  const [tweetBody, setTweetBody] = useState("");
  const handleTextUseChange = (onChangeEvent) =>
    setTweetBody(onChangeEvent.target.value);

  const handleSubmit = () => {
    tweetFunction("6m", tweetBody);
    setTweetBody("");
  };

  return (
    <div className="tweetCompose">
      <div className="profileContainer">
      <ProfilePicture src={michelangelo} size="medium" />
      </div>
      <div className="inputText">
        <TextareaAutosize
        className="inputTextArea"
          placeholder={placeHolder}
          maxLength="280"
          cols="45"
          wrap="hard"
          value={tweetBody}
          onChange={handleTextUseChange}
        />
        </div>
        <div className="tweetComposeButtons">
          {/* dont think each button needs a div to be honest, but once I remove them things don't align well  */}
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
          {submit}
        </button>
      </div>
    </div>
  );
};

export default TweetCompose;
