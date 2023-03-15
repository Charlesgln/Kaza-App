import React from "react";

const LongImage = ({ className, content }) => {
  return (
    <div className="container">
      <div className="long-image"></div>
      <div className={className}></div>
      <h1>{content}</h1>
    </div>
  );
};

export default LongImage;
