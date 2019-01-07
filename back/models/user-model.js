
// Creating User schema for databae

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	googleId: String,
	// email: String,
	dateOfCreation: Date,
	token: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;