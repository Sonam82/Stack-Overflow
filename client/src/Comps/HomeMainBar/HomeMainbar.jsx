import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuesList from "./QuesList";

const HomeMainbar = () => {
  // var quesLst = [
  //   {
  //     _id: 1,
  //     upVotes: 2,
  //     downvotes: 0,
  //     noOfAns: 2,
  //     quesTitle: "What is a function",
  //     quesBody: "It meant to be",
  //     quesTags: ["Java", "Node.js", "React.js", "MongoDB"],
  //     usrPosted: "mano",
  //     userId: 1,
  //     askedOn: "Jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 4,
  //     downvotes: 1,
  //     noOfAns: 0,
  //     quesTitle: "What is a function",
  //     quesBody: "It meant to be",
  //     quesTags: ["JavaScript", "R", "Python"],
  //     usrPosted: "mano",
  //     askedOn: "Jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downvotes: 2,
  //     noOfAns: 0,
  //     quesTitle: "What is a function",
  //     quesBody: "It meant to be",
  //     quesTags: ["Java", "Node.js", "React.js", "MongoDB"],
  //     usrPosted: "mano",
  //     askedOn: "Jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAns: "Kumar",
  //         UserId: 2,
  //         answeredOn: "jan 2",
  //       },
  //     ],
  //   },
  // ];

  // console.log(quesLst);

  const user = 1;
  const navigate = useNavigate();
  const location = useLocation();

  const quesLst = useSelector((state) => state.questionReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("Login Or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestions");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {quesLst.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{quesLst.data.length} questions</p>
            <QuesList quesLst={quesLst.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
