const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, `Slider title is a required field.`],
		trim: true,
		maxLength: [50, `Slider title is too long. You should not provide over 50 charecter.`],
	},
	info: {
		type: String,
		required: [true, `Slider info is a required field.`],
		trim: true,
		maxLength: [120, `Slider info is too long. You should not provide over 120 charecter.`],
	},
	slide: {
		type: String,
		required: [true, `Slider slide (image) is a required field.`],
		trim: true,
	},
	created: {
		type: Date,
		default: Date.now
	}
})

const Slider = mongoose.model('Slider', sliderSchema);
module.exports = Slider;	