import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuesList from "./QuesList";

const HomeMainbar = () => {
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
            <p>{quesLst.data.length} Questions</p>
            <QuesList quesLst={quesLst.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
