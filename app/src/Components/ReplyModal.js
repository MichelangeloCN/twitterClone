import React, { useState } from "react";
import michelangelo from "./profilepic.png";

const ReplyModal = ({ replyFunction }) => {
  const [replyBody, setReplyBody] = useState("");
  const handleTextUseChange = (onChangeEvent) =>
    setReplyBody(onChangeEvent.target.value);

  const handleSubmit = () => {
    replyFunction("6m", replyBody);
    setReplyBody("");
  };

  return (
    <div className="replyCompose">
      <div className="profilePic">
        <img src={michelangelo} alt="profilepic" />
      </div>
      <div className="inputText">
        <textarea
          placeholder="reply"
          maxLength="280"
          cols="45"
          wrap="hard"
          value={replyBody}
          onChange={handleTextUseChange}
        />
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
      </div>
      <div className="replyComposeButton">
        <button
          className="replyButton"
          type="button"
          disabled={!replyBody}
          onClick={handleSubmit}
        >
          Reply
        </button>
      </div>
    </div>
  );
};
export default ReplyModal;
