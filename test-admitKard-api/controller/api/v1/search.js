const questionModel = require("../../../modal/question");
const tagModel = require("../../../modal/tag");
module.exports.home = async function (req, res) {
  try {
    // use aggregate with score so that we sort on basis of sort
    if (req.query.searchBy === "query") {
      let question = await questionModel.aggregate([
        { $match: { $text: { $search: req.query.value } } },
        { $sort: { score: { $meta: "textScore" } } },
        { $project: { query: 1, tags: 1, topic: 1, _id: 0 } },
      ]);

      return res.status(200).json({
        message: "see",
        question: question,
      });
    } else if (req.query.searchBy === "tag") {
      //search by tag
      question = await tagModel
        .find({ tag: req.query.value })
        .populate("questions");

      let questionSend = new Array();
      let questionArray = question[0].questions;
      for (let i = 0; i < questionArray.length; i++) {
        questionSend.push({
          query: questionArray[i].query,
          topic: questionArray[i].topic,
          tags: questionArray[i].tags,
        });
      }
      return res.status(200).json({
        message: "success",
        questions: questionSend,
      });
    } else if (req.query.searchBy === "topic") {
      // search by topic
      question = await questionModel
        .find({ topic: req.query.value })
        .select("query tags topic -_id");
      return res.status(200).json({
        message: "search-sucessfull",
        question: question,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
