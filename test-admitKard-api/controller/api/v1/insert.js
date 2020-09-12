const questionModel = require("../../../modal/question");
const tagModel = require("../../../modal/tag");
module.exports.home = async function (req, res) {
  try {
    console.log("okk", req.body);
    let { query } = req.body; //object destructuring
    query = query.trim();
    let question = await questionModel.findOne({ query: query }); // see that if question exits that we don;t insert it
    if (question) {
      // if question exits and there
      return res.status(409).json({
        message: "query already exist",
      });
    }
    let questionCreate = await questionModel.create(req.body); //creating new question if there is not
    await insertIntoTagModel(questionCreate); // inserting into tag model
    return res.status(200).json({
      message: "query created succesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
async function insertIntoTagModel(question) {
  let tags = question.tags;
  tags.map(async (tag) => {
    let tagFind = await tagModel.findOne({ tag: tag }); // finding particular tag
    if (tagFind) {
      tagFind.questions.push(question._id); // if tags find pushing particular question
      await tagFind.save();
    } else {
      await tagModel.create({
        tag: tag,
        questions: [question._id],
      });
    }

    return;
  });
  return;
}
