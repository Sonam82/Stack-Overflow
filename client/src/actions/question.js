// import React from "react";
import * as api from "../api/index";
export const askQuestion = (quesData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQues(quesData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const voteQues = (id, value, userId) => async (dispatch) => {
  try {
    const { data } = await api.voteQues(id, value, userId);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const postAns = (ansdata) => async (dispatch) => {
  try {
    const { id, noOfAns, answerBody, userAns, userId } = ansdata;
    const { data } = await api.postAns(
      id,
      noOfAns,
      answerBody,
      userAns,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions);
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.deleteQuestion(id);
    dispatch(fetchAllQuestions);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAns) => async (dispatch) => {
  try {
    const { data } = await api.deleteAnswer(id, answerId, noOfAns);
    dispatch(fetchAllQuestions);
  } catch (error) {
    console.log(error);
  }
};
