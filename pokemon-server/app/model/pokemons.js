const mongoose = require('mongoose');

const {
	Schema,
	model
} = mongoose;

const pokemonSchema = new Schema({
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
		type: String,
		required: true
	},
	weaknesses: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	features: {
		type: String,
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
		type: String,
		required: true
	},
	imgSrc: {
		type: String,
		required: true
	}
})

module.exports = model('pokemon', pokemonSchema);