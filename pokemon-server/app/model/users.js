const mongoose = require('mongoose');

const {
	Schema,
	model
} = mongoose;

const userSchema = new Schema({
	__v: {
		type: Number,
		select: false
	},
	account: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
});

module.exports = model('User', userSchema);
