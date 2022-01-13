import React, { useEffect, useState } from "react";
import VideoElement from "./VideoElement";

const Video = ({ videoItems, indexPosition, videoX, lastImageRef = null }) => {
  
  return (
    <>
      {videoItems.map((item, index) => {
        if (index % videoX === indexPosition) {
          return (
            <VideoElement key={item.id} src={item.videos.tiny.url} picId={item.picture_id} videoX={videoX} />
          );
        }
      })}
    </>
  );
};

export default Video;
