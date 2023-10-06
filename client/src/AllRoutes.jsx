import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestions from "./Pages/AskQuestions/AskQuestions";
import DisplayQues from "./Pages/Questions/DisplayQues";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Auth" Component={Auth} />
      <Route path="/Questions" Component={Questions} />
      <Route path="/AskQuestions" Component={AskQuestions} />
      <Route path="/Questions/:id" Component={DisplayQues} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
    </Routes>
  );
};

export default AllRoutes;
