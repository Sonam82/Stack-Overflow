import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./HomeMainbar.css";

const Questions = ({ question }) => {
  return (
    <div className="display-ques-container">
      <div className="display-votes-ans">
        <p>{question.upVotes.length - question.downvotes.length}</p>
        <p>Votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAns}</p>
        <p>Answer</p>
      </div>
      <div className="display-ques-details">
        <Link to={`/Questions/${question._id}`} className="ques-title-link">
          {question.quesTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.quesTags.map((tag) => (
              <p key={tag}> {tag}</p>
            ))}
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
