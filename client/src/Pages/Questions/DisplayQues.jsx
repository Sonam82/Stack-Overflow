import React from "react";
import LeftSidebar from "../../Comps/LeftSideBar/LeftSidebar";
import RightSidebar from "../../Comps/RightSideBar/RightSidebar";
import QuesDetails from "./QuesDetails";

const DisplayQues = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuesDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQues;
