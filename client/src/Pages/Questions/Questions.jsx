import React from "react";

import "../../App.css";
import LeftSidebar from "../../Comps/LeftSideBar/LeftSidebar";
import HomeMainbar from "../../Comps/HomeMainBar/HomeMainbar";
import RightSidebar from "../../Comps/RightSideBar/RightSidebar";

const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Questions;
