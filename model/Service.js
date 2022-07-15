const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, `Service name is a required field.`],
		trim: true,
	},
	details: {
		type: String,
		required: [true, `Service details is a required field.`],
		trim: true,
		maxLength: [200, `Service details is too long. You should not provide over 200 charecter.`],
	},
	icon: {
		type: String,
		required: [true, `Service icon is a required field.`],
		trim: true,
	},
	created: {
		type: Date,
		default: Date.now,
	}
})

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;	