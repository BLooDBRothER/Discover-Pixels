import React, { useState } from "react";
import { BiLoaderCircle } from 'react-icons/bi';
import VideoAuthor from "./VideoAuthor";
import VideoMetadata from "./VideoMetadata";

const VideoElement = ({src, picId, videoX, author, metadata}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const loadVideo = (e) => {
    setIsVideoVisible(true);
    setIsVideoLoading(true);
  };

  const cancelVideo = (e) => {
    setIsImageVisible(true);
    setIsVideoVisible(false);
    setIsVideoLoading(false);
  }

  const afterLoad = (e) => {
    setIsVideoLoading(false);
    setIsImageVisible(false);
  }

  return (
    <div className="video" onMouseEnter={loadVideo} onMouseLeave={cancelVideo}  onMouseOut={cancelVideo}>
      <VideoAuthor authorName={author.name} authorPic={author.url} />
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
      <VideoMetadata viewCount={metadata.views} downloads={metadata.downloads} likes={metadata.likes} commentCount={metadata.comments} />
      {isVideoLoading && <BiLoaderCircle className="loader-ic" />}
    </div>
  );
};

export default VideoElement;
