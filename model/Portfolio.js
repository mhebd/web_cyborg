const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
	image: {
		type: String,
		required: [true, `Portfolio Image is a required field.`],
	},
	type: {
		type: String,
		required: [true, `Portfolio type is a required field.`],
		trim: true,
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;	