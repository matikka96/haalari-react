
const router = require('express').Router();
const Post = require('../models/post-model');
// const keys = require('../config/keys');
// const jwt = require("jsonwebtoken");


// Load all posts
router.get('/loadall', (req, res) => {
	Post.find({}, (err, allPosts) => {
		res.send(allPosts);
	});
});

// Load spesific post
router.post('/load', (req, res) => {
	// console.log(req.body);
	Post.findOne({_id : req.body.postId}).then((response) => {
		res.send(response);
	})
});

module.exports = router;