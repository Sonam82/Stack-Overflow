import React, { useRef } from "react";

// import { useGesture } from "@use-gesture/react";

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
  const [doubleTapCount, setDoubleTapCount] = React.useState(0);

  const handleMouseDown = (e) => {
    if (
      e.nativeEvent.offsetX >
      videoRef.current.getInternalPlayer().videoWidth / 2
    ) {
      // If the tap is on the right side of the video
      setDoubleTapCount(doubleTapCount + 1);
      setTimeout(() => {
        setDoubleTapCount(0);
      }, 300); // Reset the count after 300 milliseconds
    }
  };

  const handleMouseUp = () => {
    if (doubleTapCount === 2) {
      // If two taps were detected, move the video forward by 10 seconds
      const currentTime = videoRef.current.getCurrentTime();
      videoRef.current.seekTo(currentTime + 10);
    }
  };

  return (
    <div>
      <ReactPlayer
        ref={videoRef}
        url={video}
        controls
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default VideoPlayer;
