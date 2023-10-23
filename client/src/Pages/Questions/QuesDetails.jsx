import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import copy from "copy-to-clipboard";

import "./Questions.css";

import upVote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import Avtar from "../../Comps/Avtar/Avtar";
import DisplayAns from "./DisplayAns";
import { postAns, deleteQuestion, voteQues } from "../../actions/question";

const QuesDetails = () => {
  const { id } = useParams();

  const quesLst = useSelector((state) => state.questionReducer);

  const [Ans, setAns] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  const location = useLocation();

  const url = "https://stack-overflow-flkp.onrender.com";

  const handlePostAns = (e, ansLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Please Login First");

      navigate("/Auth");
    } else {
      if (Ans === "") {
        alert("Enter an answer before submitting...");
      } else {
        dispatch(
          postAns({
            id,
            noOfAns: ansLength + 1,
            answerBody: Ans,
            userAns: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copies url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQues(id, "upVotes", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQues(id, "downvotes", User.result._id));
  };

  return (
    <div className="ques-details-page">
      {quesLst.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {quesLst.data
            .filter((ques) => ques._id === id)
            .map((ques) => (
              <div key={ques._id}>
                {console.log(ques)}
                <section className="ques-details-container">
                  <h1>{ques.quesTitle}</h1>
                  <div className="ques-details-container-2">
                    <div className="ques-votes">
                      <img
                        src={upVote}
                        alt="Sort up"
                        width={24}
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{ques.upVotes.length - ques.downvotes.length}</p>
                      <img
                        src={downVote}
                        alt="Sort down"
                        width={24}
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="ques-body">{ques.quesBody}</p>
                      <div className="ques-details-tags">
                        {ques.quesTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="ques-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === ques?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(ques.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${ques.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avtar backgroundColor="orange" px="8px" py="5px">
                              {ques.userPosted.charAt(0).toUpperCase()}
                            </Avtar>
                            <div>{ques.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {ques.noOfAns !== 0 && (
                  <section>
                    <h3>{ques.noOfAns} Answers</h3>
                    <DisplayAns
                      key={ques._id}
                      ques={ques}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, ques.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAns(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value={"Post Your Answer"}
                    />
                  </form>
                  <p>
                    Brows other questions taged
                    {ques.quesTags.map((tag) => (
                      <Link to={"/Tags"} key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestions"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own questions.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuesDetails;
