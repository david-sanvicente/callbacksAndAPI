const request = require("request")
const getPoke = require("./singleRequest")

// Query a list of Pokémon from the API using the limitand offset inputs mentioned above
module.exports = (limit, offset, callback) => {
  request(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      callback(body.results)
    }
  )
}
