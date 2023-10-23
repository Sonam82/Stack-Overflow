import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuesData = req.body;
  const userId = req.userId;
  const postQues = new Questions({ ...postQuesData, userId });
  try {
    await postQues.save();
    res.status(200).json("Posted a Question Successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new Question");
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const quesList = await Questions.find().sort({ askedOn: -1 });
    res.status(200).json(quesList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable...");
  }
  try {
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const voteQues = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }

  try {
    const ques = await Questions.findById(_id);
    const upIndex = ques.upVotes.findIndex((id) => id === String(userId));
    const downIndex = ques.downvotes.findIndex((id) => id === String(userId));

    if (value === "upVotes") {
      if (downIndex !== -1) {
        ques.downvotes = ques.downvotes.filter((id) => id !== String(userId));
      }
      if (upIndex === -1) {
        ques.upVotes.push(userId);
      } else {
        ques.upVotes = ques.upVotes.filter((id) => id !== String(userId));
      }
    } else if (value === "downvotes") {
      if (upIndex !== -1) {
        ques.upVotes = ques.upVotes.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        ques.downvotes.push(userId);
      } else {
        ques.downvotes = ques.downvotes.filter((id) => id !== String(userId));
      }
    }
    await Questions.findByIdAndUpdate(_id, ques);
    res.status(200).json({ message: "Voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "Id not fount..." });
  }
};
