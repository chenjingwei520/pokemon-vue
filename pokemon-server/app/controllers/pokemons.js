const pokemons = require('../model/pokemons')
const path = require('path');

class pokemonController {
	async createPokemon(contxt) {
		console.log(contxt.request)
	}
}

module.exports = new pokemonController();