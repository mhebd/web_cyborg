const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, `Reviewer name is a required field.`],
		trim: true,
		minLength: [3, `Reviewer name is too short. You should provide at least 3 charecter.`],
	},
	opinion: {
		type: String,
		required: [true, `Reviewer opinion is a required field.`],
		trim: true,
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;	