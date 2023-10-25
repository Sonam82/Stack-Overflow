import React, { useRef } from "react";

import { useGesture } from "@use-gesture/react";

import ReactPlayer from "react-player";
import video from "../../assets/Intro.mp4";
const VideoPlayer = () => {
  const videoRef = useRef(null);
  // const controls = useGesture({
  //   onSwipeLeft: () =>
  //     videoRef.current.seekTo(videoRef.current.getCurrentTime() - 10),
  //   onSwipeRight: () =>
  //     videoRef.current.seekTo(videoRef.current.getCurrentTime() + 10),
  // });

  return (
    <div>
      <ReactPlayer ref={videoRef} url={video} controls />
    </div>
  );
};

export default VideoPlayer;
