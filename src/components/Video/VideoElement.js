import React, { useState } from "react";
import { BiLoaderCircle } from 'react-icons/bi';
import VideoAuthor from "./VideoAuthor";
import VideoMetadata from "./VideoMetadata";

const VideoElement = ({src, picId, videoX, author, metadata, lastVideoRef}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const loadVideo = (e) => {
    setIsVideoVisible(true);
    setIsVideoLoading(true);
  };

  const cancelVideo = (e) => {
    setIsVideoVisible(false);
    setIsVideoLoading(false);
  }

  const afterLoad = (e) => {
    setIsVideoLoading(false);
  }

  const setAutoHeight = (e) => {
    e.target.style.height = "auto";
  }

  return (
    <div className="video" ref={lastVideoRef} onMouseEnter={loadVideo} onMouseLeave={cancelVideo} onMouseOut={cancelVideo} onTouchStart={loadVideo} onTouchEnd={cancelVideo} onTouchCancel={cancelVideo}>
      <VideoAuthor authorName={author.name} authorPic={author.url} />
      {isVideoVisible && (
        <video className={`video-${videoX}x video-element ${isVideoLoading ? "none" : ""}`} onLoadedData={afterLoad} loop muted autoPlay controls = ''>
          <source src={src} type="video/mp4" />
        </video>
      )}
      <img
          className={`video-${videoX}x`}
          style={{height: "400px"}}
          onLoad={setAutoHeight}
          onContextMenu={(e) => {e.preventDefault()}}
          src={`https://i.vimeocdn.com/video/${picId}_640x360.jpg`}
          alt="preview"
      />
      <VideoMetadata viewCount={metadata.views} downloads={metadata.downloads} likes={metadata.likes} commentCount={metadata.comments} />
      {isVideoLoading && <BiLoaderCircle className="loader-ic" />}
    </div>
  );
};

export default VideoElement;
