import express from "express";
import auth from "../middlewares/auth.js";

import {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
  voteQues,
} from "../controllers/Questions.js";

const router = express.Router();

router.post("/Ask", auth, AskQuestion);
router.get("/get", getAllQuestions);
router.delete("/delete/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQues);

export default router;
