import React from "react";

const TweetCompose = () => {
  return (
    <div className="tweetCompose">
      <image src=""></image>
      <div className="inputText">
        <input type="text">"What's Happening"</input>
      </div>
      <div className="tweetComposeIcons">
        <i class="ri-image-line"></i>
        <i class="ri-file-gif-line"></i>
        <i class="ri-bar-chart-2-line"></i>
        <i class="ri-emotion-happy-line"></i>
        <i class="ri-calendar-todo-line"></i>
      </div>
      <div className="tweetComposeButton">
        <i class="ri-quill-pen-fill"></i>
      </div>
    </div>
  );
};

export default TweetCompose;
