import React from "react";
import { useLastObjectContext } from "../last_intersection_observer/LastObjectContext";
import VideoElement from "./VideoElement";

const Video = ({ videoItems, indexPosition, videoX}) => {
  const lastContextData = useLastObjectContext();
  const isLastVideoObject = (index) => {
    return (indexPosition === videoX - 1 && index + videoX >= videoItems.length) ? true : false;
  }
  return (
    <>
      {videoItems.map((item, index) => {
        if (index % videoX === indexPosition) {
          return (
            <VideoElement
              key={item.id.toString() + index}
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
              lastVideoRef={isLastVideoObject(index, item.id) ? lastContextData : null}
            />
          );
        }
        else{
                    return <div key={index}></div>;
        }
      })}
    </>
  );
};

export default Video;
