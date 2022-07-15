const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, `Team member name is a required field.`],
		trim: true,
	},
	expartIn: {
		type: String,
		required: [true, `Team member exportism is a required field.`],
		trim: true,
	},
	avatar: {
		type: String,
		required: [true, `Team member avatar is a required field.`],
		trim: true,
	},
	social: [{
		// url: {
		// 	type: String,
		// 	required: [true, `Team social url is a required field.`],
		// 	trim: true,
		// },
		// icon: {
		// 	type: String,
		// 	required: [true, `Team social icon is a required field.`],
		// 	trim: true,
		// }
		url: String,
		icon: String,
	}],
	created: {
		type: Date,
		default: Date.now
	}
})

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;	