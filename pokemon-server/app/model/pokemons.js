const mongoose = require('mongoose');

const {
	Schema,
	model
} = mongoose;

class pokemonSchema = new Schema({
	__v: {
		type: Number,
		select: false
	},
	no: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	types: {
		type: Array,
		required: true
	},
	weaknesses: {
		type: Array,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	features: {
		type: Array,
		required: true
	},
	height: {
		type: String,
		required: true
	},
	weight: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	raceVale: {
		type: Object,
		required: true
	}
})

module.exports = model('pokemon', pokemonSchema);