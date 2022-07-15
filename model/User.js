const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, `User name is a required field.`],
		minLength: 4,
		maxLength: 20,
		trim: true,
	},
	email: {
		type: String,
		required: [true, `User email is a required field.`],
		unique: [true, `User with this email is already exist.`],
		trim: true,
		lower: true,
	},
	password: {
		type: String,
		required: [true, `User password is a required field.`],
		minLength: 6,
		maxLength: 16,
	},
	gravatar: String,
	type: {
		type: String,
		enum: ['user'],
		default: 'user',
	},
	created: {
		type: Date,
		default: Date.now
	}
})

userSchema.pre('save', async function(next) {
	this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.getToken = async function() {
	const token = await jwt.sign({
		id: this._id,
		email: this.email,
		name: this.name,
		type: this.type
	}, process.env.SECRET, { expiresIn: process.env.EXPIRES});

	return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;	