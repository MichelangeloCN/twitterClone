import React from "react";
import Modal from "react-modal";
import TweetCompose from "./TweetCompose";

const ReplyModal = ({ modalIsOpen, modalStyles, setModalIsOpenToFalse }) => {
  const replyFunction = () => {};

  return (
    <Modal isOpen={modalIsOpen} style={modalStyles}>
      <div className="modal-header">
        <button type="button" id="replybutton" onClick={setModalIsOpenToFalse}>
          x
        </button>
      </div>
      <TweetCompose
        tweetFunction={replyFunction}
        placeHolderText="Tweet Your Reply"
        submit="Reply"
      />
    </Modal>
  );
};
export default ReplyModal;
