import express from "express";

import { postAns, deleteAnswer } from "../controllers/Answers.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.patch("/post/:id", auth, postAns);
router.patch("/delete/:id", auth, deleteAnswer);

export default router;
