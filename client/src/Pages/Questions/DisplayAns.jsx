import React from "react";
import { Link, useParams } from "react-router-dom";

import Avtar from "../../Comps/Avtar/Avtar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";

import "./Questions.css";

const DisplayAns = ({ ques, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAns) => {
    dispatch(deleteAnswer(id, answerId, noOfAns - 1));
  };

  return (
    <div>
      {ques.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="ques-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, ques.noOfAns)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/User/${ques.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avtar backgroundColor={"lightgreen"} px="8px" py="5px">
                  {ans.userAns.charAt(0).toUpperCase()}
                </Avtar>
                <div>{ans.userAns}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAns;
