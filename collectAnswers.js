const readLine = require("readline")

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

module.exports = (questions, done) => {
  const answers = []
  const [question] = questions

  function questionAnswered(answer) {
    answers.push(answer)
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered)
    } else {
      done(answers)
    }
  }

  rl.question(question, questionAnswered)
}
