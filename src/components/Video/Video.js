import React, { useEffect, useState } from "react";
import VideoElement from "./VideoElement";

const Video = ({ videoItems, indexPosition, videoX, lastVideoRef = null }) => {
  return (
    <>
      {videoItems.map((item, index) => {
        if (
          indexPosition === videoX - 1 &&
          index % videoX === indexPosition &&
          index + videoX >= videoItems.length
        ) {
          return (
            <VideoElement
              key={item.id + index}
              src={item.videos.tiny.url}
              picId={item.picture_id}
              videoX={videoX}
              author={{ name: item.user, url: item.userImageURL }}
              metadata={{
                views: item.views,
                likes: item.likes,
                comments: item.comments,
                downloads: item.downloads,
              }}
              lastVideoRef={lastVideoRef}
            />
          );
        }
        if (index % videoX === indexPosition) {
          return (
            <VideoElement
              key={item.id + index}
              src={item.videos.tiny.url}
              picId={item.picture_id}
              videoX={videoX}
              author={{ name: item.user, url: item.userImageURL }}
              metadata={{
                views: item.views,
                likes: item.likes,
                comments: item.comments,
                downloads: item.downloads,
              }}
            />
          );
        }
      })}
    </>
  );
};

export default Video;
