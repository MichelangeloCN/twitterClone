import React from "react";

import "./ImageAttachment.css";

const ImageAttachment = ({ attachment }) => {
  return (
    <div className="imageAttachment">
      <img src={attachment.src} alt="alttext" />
    </div>
  );
};

export default ImageAttachment;
