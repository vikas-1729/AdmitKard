const mongoose = require("mongoose");
let tagsEnum = [
  "top-colleges",
  "qualify-criteria",
  "stanford-university",
  "usa",
  "admission",
  "others",
];
const TagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    enum: tagsEnum,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "questions",
    },
  ],
});

const tag = mongoose.model("tag", TagSchema);
module.exports = tag;
