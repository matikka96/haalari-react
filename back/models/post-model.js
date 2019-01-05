
// Creating Favorites schema for databae

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	postAuthor: String,
	postCreatedDate: String,
	votes: [String],
	picture: {
		data: Buffer,
		type: String
	}
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;