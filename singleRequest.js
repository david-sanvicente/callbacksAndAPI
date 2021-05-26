const request = require("request")

module.exports = (poke, callback) => {
  request(
    `https://pokeapi.co/api/v2/pokemon/${poke.name}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      callback(body)
    }
  )
}
