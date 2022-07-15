const mongoose = require('mongoose');

const faqSchema = mongoose.Schema({
	question: {
		type: String,
		required: [true, `Question is a required field.`],
		trim: true,
	},
	answare: {
		type: String,
		required: [true, `Answare is a required field.`],
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const FAQ = mongoose.model('FAQ', faqSchema);
module.exports = FAQ;	