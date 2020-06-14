const Pokemons = require('../model/pokemons')
const path = require('path');

class pokemonController {
	async createPokemon(contxt) {

		contxt.verifyParams({
			no: {
				type: 'string',
				required: true
			},
			name: {
				type: 'string',
				required: true
			},
			types: {
				type: 'string',
				required: true
			},
			weaknesses: {
				type: 'string',
				required: true
			},
			desc: {
				type: 'string',
				required: true
			},
			features: {
				type: 'string',
				required: true
			},
			height: {
				type: 'string',
				required: true
			},
			weight: {
				type: 'string',
				required: true
			},
			category: {
				type: 'string',
				required: true
			},
			raceVale: {
				type: 'string',
				required: true
			}
		})

		const {
			no,
			name
		} = contxt.request.body;

		const repeatedPokemon = await Pokemons.findOne({
			no,
			name
		});
		if (repeatedPokemon) {
			contxt.throw(409, '该宝可梦已存在');
		}
		
		const pokemon = contxt.request.body;;
		const imgFile = contxt.request.files.file;
		const imgName = path.basename(imgFile.path);
		pokemon['imgSrc'] = `${contxt.origin}/uploads/${imgName}`;
		await new Pokemons(pokemon).save();
		contxt.body = pokemon;
	}
	
	async getPokemons(contxt) {
		const {per_page = 16} = contxt.query;
		const page = Math.max(contxt.query.page * 1, 1) - 1;
		const perPage = Math.max(per_page * 1, 1);
		contxt.body = await Pokemons.find().limit(perPage).skip(page * perPage);
	}
	
	async getPokemonById(contxt) {
		const pokemon = await Pokemons.findById(contxt.params.id);
		if (!pokemon) {
			contxt.throw(404, '宝可梦不存在')
		}
		contxt.body = pokemon;
	}
	
	async updatePokemonById(contxt) {
		contxt.verifyParams({
			no: {
				type: 'string',
				required: false
			},
			name: {
				type: 'string',
				required: false
			},
			types: {
				type: 'string',
				required: false
			},
			weaknesses: {
				type: 'string',
				required: false
			},
			desc: {
				type: 'string',
				required: false
			},
			features: {
				type: 'string',
				required: false
			},
			height: {
				type: 'string',
				required: false
			},
			weight: {
				type: 'string',
				required: false
			},
			category: {
				type: 'string',
				required: false
			},
			raceVale: {
				type: 'string',
				required: false
			}
		});
		const pokemon = await Pokemons.findByIdAndUpdate(contxt.params.id, contxt.request.body);
		if (!pokemon) {
			contxt.throw(404, '宝可梦不存在');
		}
		contxt.body = pokemon;
	}
	
	
}

module.exports = new pokemonController();
