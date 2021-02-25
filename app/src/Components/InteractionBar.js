import React, { useState } from "react";
import Modal from "react-modal";
import "./InteractionBar.css";
import ReplyModal from "./ReplyModal";

const InteractionBar = () => {
  const [retweetCount, setRetweetCount] = useState(5);
  const [likeCount, setLikeCount] = useState(100);
  const [shareCount, setShareCount] = useState(10);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="interactionIcons">
      <div className="comment">
        <button type="button" onClick={setModalIsOpenToTrue}>
          <i className="ri-chat-3-line"> </i>
        </button>
        <Modal isOpen={modalIsOpen}>
          <button type="button" onClick={setModalIsOpenToFalse}>
            x
          </button>
          <ReplyModal />
        </Modal>
      </div>

      <div className="retweet">
        <button type="button" onClick={() => setRetweetCount(retweetCount + 1)}>
          <i className="ri-refresh-line"> </i>
        </button>
        <p> {retweetCount} </p>
      </div>

      <div className="like">
        <button type="button" onClick={() => setLikeCount(likeCount + 1)}>
          <i className="ri-heart-line"> </i>
        </button>
        <p> {likeCount} </p>
      </div>

      <div className="share">
        <button type="button" onClick={() => setShareCount(shareCount + 1)}>
          <i className="ri-download-2-line"> </i>
        </button>
      </div>
    </div>
  );
};

export default InteractionBar;
