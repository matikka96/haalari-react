
// Creating Favorites schema for databae

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	postId = String,
	commentAuthor: String,
	commentContent: String,
	commentCreatedDate: Date
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;