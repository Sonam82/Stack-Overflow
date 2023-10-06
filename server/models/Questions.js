import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  quesTitle: { type: String, required: "Question must have a Title" },
  quesBody: { type: String, required: "Question must have a Body" },
  quesTags: { type: [String], required: "Question must have a Tag" },
  noOfAns: { type: Number, default: 0 },
  upVotes: { type: [String], default: [] },
  downvotes: { type: [String], default: [] },
  userPosted: { type: String, required: "Question must have an Author" },
  userId: { type: String },
  askedOn: { type: Date, default: Date.now },
  answer: [
    {
      answerBody: String,
      userAns: String,
      userId: String,
      answeredOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Question", QuestionSchema);
