import React from "react";
import VideoPlayer from "./VedioPlayer";
import LeftSidebar from "../../Comps/LeftSideBar/LeftSidebar";
const About = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero corporis
        consectetur accusantium nihil ullam qui neque, sunt excepturi dicta hic
        provident ex amet nam esse molestiae minima numquam eius incidunt. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Harum inventore non
        veniam ullam, optio voluptatibus minus eos porro nemo totam distinctio
        maiores animi libero perferendis! Commodi nulla sint fugit placeat.
        <VideoPlayer />
      </div>
    </div>
  );
};

export default About;
