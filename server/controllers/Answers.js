import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAns = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAns, answerBody, userAns, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable...");
  }

  updateNoOfQuestion(_id, noOfAns);

  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAns, userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateNoOfQuestion = async (_id, noOfAns) => {
  try {
    await Questions.findByIdAndUpdate(_id, { $set: { noOfAns: noOfAns } });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAns } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable...");
  }

  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer Unavailable...");
  }

  updateNoOfQuestion(_id, noOfAns);

  try {
    await Questions.updateOne(
      { _id },
      { $pull: { answer: { _id: answerId } } }
    );
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};
