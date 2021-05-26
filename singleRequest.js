const request = require("request")

module.exports = (poke) => {
  request(
    `https://pokeapi.co/api/v2/pokemon/${poke.name}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      console.log(body.name, body.height, body.weight)
      //   allWeight += body.weight
      //   allHeight += body.height
      //   totalPoke++
      //   console.log(
      //     `allWeight: ${allWeight} allHeight: ${allHeight} totalPoke: ${totalPoke}\n`
      //   )
    }
  )
}
