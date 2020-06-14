const Router = require('koa-router');
const pokemonsCtl = require('../controllers/pokemons')

const router = new Router({
	prefix: '/pokemon'
})

router.post('/', pokemonsCtl.createPokemon)