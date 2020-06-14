const Router = require('koa-router');
const pokemonsCtl = require('../controllers/pokemons')

const router = new Router({
	prefix: '/pokemons'
})

router.post('/', pokemonsCtl.createPokemon)

router.get('/', pokemonsCtl.getPokemons)

router.get('/:id', pokemonsCtl.getPokemonById)

router.patch('/:id', pokemonsCtl.updatePokemonById)

module.exports = router;