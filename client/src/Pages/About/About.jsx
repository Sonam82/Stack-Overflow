import React from "react";
import VideoPlayer from "./VedioPlayer";
import LeftSidebar from "../../Comps/LeftSideBar/LeftSidebar";
const About = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        Here is a video, which gives some information about this Project...
        <VideoPlayer />
      </div>
    </div>
  );
};

export default About;
