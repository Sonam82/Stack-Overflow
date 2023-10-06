import React from "react";
import Questions from "./Questions";
const QuesList = ({ quesLst }) => {
  return (
    <>
      {quesLst.map((question) => (
        <Questions question={question} key={question._id}></Questions>
      ))}
    </>
  );
};

export default QuesList;
