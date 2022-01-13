import React, { useState } from "react";

const VideoElement = ({src, picId, videoX}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const loadVideo = (e) => {
    setIsVideoVisible(true);
  };

  const cancelVideo = (e) => {
    setIsImageVisible(true);
    setIsVideoVisible(false);
  }

  const afterLoad = (e) => {
      setIsImageVisible(false);
  }

  return (
    <div className="video" onMouseEnter={loadVideo} onMouseLeave={cancelVideo}  onMouseOut={cancelVideo}>
      {isVideoVisible && (
        <video className={`video-${videoX}x ${isImageVisible ? "none" : ""}`} loop="loop" autoPlay="autoplay" onLoadedData={afterLoad}>
          <source src={src} type="video/mp4" />
        </video>
      )}
      {isImageVisible && (
        <img
          className={`video-${videoX}x`}
          src={`https://i.vimeocdn.com/video/${picId}_640x360.jpg`}
          alt="preview"
        />
      )}
    </div>
  );
};

export default VideoElement;
