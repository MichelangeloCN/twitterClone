import React from "react";
import "./InteractionBar.css";

const InteractionBar = () => {
  return (
    <div className="interactionIcons">

      <div className="comment">
        <i className="ri-chat-3-line"> </i>
        <p>50</p>
      </div>

      <div className="retweet">
        <i className="ri-refresh-line"> </i>
        <p>10</p>
      </div>

      <div className="like">
        <i className="ri-heart-line"> </i>
        {/* <i class="ri-heart-fill">100</i> when reg heart clicked this should be triggered */}
        <p>123</p>
      </div>
      
      <div className="share">
        <i className="ri-download-2-line"> </i>
        <p>5</p>
      </div>
      
    </div>
  );
};

export default InteractionBar;
