const collectAnswers = require("./collectAnswers")
const queryPoke = require("./queryPoke")
const singleReq = require("./singleRequest")

const questions = ["Please enter a limit: ", "Please enter an offset: "]

collectAnswers(questions, (answers) => {
  const limit = answers[0]
  const offset = answers[1]
  queryPoke(limit, offset, (pokemon) => {
    let totalWeight = 0
    let totalHeight = 0
    let idx = 0
    pokemon.map((poke, i) => {
      singleReq(poke, (body) => {
        totalWeight += body.weight
        totalHeight += body.height
        idx++
        // console.log(idx, body.name, body.height, body.weight)
        if (idx === pokemon.length) {
          // console.log(`Total weight: ${totalWeight}`)
          // console.log(`Total height: ${totalHeight}`)
          // console.log(`Total Pokemon: ${idx}`)
          console.log(`Average weight: ${totalWeight / idx}`)
          console.log(`Average height: ${totalHeight / idx}`)
        }
      })
    })
  })
})
