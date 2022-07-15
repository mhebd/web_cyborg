const mongoose = require('mongoose');

const successSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, `Success rate name is a required field.`],
		trim: true,
		maxLength: [20, `Success rate name is too long. You should not provide over 20 charecter.`],
	},
	percentage: {
		type: Number,
		default: 1,
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const Success = mongoose.model('Success', successSchema);
module.exports = Success;	