const request = require("request")
const getPoke = require("./singleRequest")

// Query a list of Pokémon from the API using the limitand offset inputs mentioned above
module.exports = (limit, offset) => {
  request(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err)
      }
      // Query details for each Pokémon to retrieve it’s heightand weight
      // console.log(body.results)
      let allWeight = 0
      let allHeight = 0
      let totalPoke = 0

      body.results.map((poke) => {
        getPoke(poke)
        // request(
        //   `https://pokeapi.co/api/v2/pokemon/${poke.name}`,
        //   { json: true },
        //   (err, res, body) => {
        //     if (err) {
        //       return console.log(err)
        //     }
        //     // console.log(body.name, body.height, body.weight)
        //     allWeight += body.weight
        //     allHeight += body.height
        //     totalPoke++
        //     console.log(
        //       `allWeight: ${allWeight} allHeight: ${allHeight} totalPoke: ${totalPoke}\n`
        //     )
        //   }
        // )
      })
      console.log("allWeight: ", allWeight)
      console.log("allHeight: ", allHeight)
      console.log("totalPoke: ", totalPoke)
    }
  )
}
