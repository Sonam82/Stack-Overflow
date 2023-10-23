import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../actions/question";
import "./AskQuestions.css";

const AskQuestions = () => {
  const [quesTitle, setQuesTitle] = useState("");
  const [quesBody, setQuesBody] = useState("");
  const [quesTags, setQuesTags] = useState("");

  const dispatch = useDispatch();

  const User = useSelector((state) => state.currentUserReducer);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (quesTitle && quesBody && quesTags) {
        dispatch(
          askQuestion(
            {
              quesTitle,
              quesBody,
              quesTags,
              userPosted: User.result.name,
              userId: User?.result?._id,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields...");
    } else {
      alert("Login to ask question...");
      navigate("/Auth");
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setQuesBody(quesBody + "\n");
    }
  };

  return (
    <div className="ask-ques">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuesTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>What are the details of your problem?</h4>
              <p>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </p>
              <textarea
                id="ask-ques-body"
                rows="9"
                onKeyDown={handleEnter}
                onChange={(e) => {
                  setQuesBody(e.target.value);
                }}
              ></textarea>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuesTags(e.target.value.split(" "));
                }}
                placeholder="e.g.(asp.net flutter django) "
              />
            </label>
          </div>
          <input
            type="submit"
            className="rev-btn"
            value={"Review your question"}
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestions;
