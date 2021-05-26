const collectAnswers = require("./collectAnswers")
const queryPoke = require("./queryPoke")

const questions = ["Please enter a limit: ", "Please enter an offset: "]

collectAnswers(questions, (answers) => {
  const limit = answers[0]
  const offset = answers[1]
  queryPoke(limit, offset)
})
