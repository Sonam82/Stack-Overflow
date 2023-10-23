import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost" /*https://stack-overflow-flkp.onrender.com*/,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQues = (quesData) => API.post("/questions/Ask", quesData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQues = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const postAns = (id, noOfAns, answerBody, userAns, userId) =>
  API.patch(`/answer/post/${id}`, { noOfAns, answerBody, userAns, userId });

export const deleteAnswer = (id, answerId, noOfAns, userAns) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAns, userAns });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
