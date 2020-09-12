const mongoose = require("mongoose");
let tagsEnum = [
  "top-colleges",
  "qualify-criteria",
  "stanford-university",
  "usa",
  "admission",
  "others",
];
let topicEnum = ["usa", "enginnering", "top", "college", "study", "others"];
const QuestionSchema = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
      enum: topicEnum,
    },

    tags: [
      {
        type: String,
        enum: tagsEnum,
      },
    ],
  },
  {
    timestamps: true,
  }
);
QuestionSchema.index({ query: "text" });
const questions = mongoose.model("questions", QuestionSchema);

module.exports = questions;
