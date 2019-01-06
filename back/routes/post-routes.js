
// TODO
////////////////////////////////////////////////////////
// /create:
// * verify filename
// * max filesize
////////////////////////////////////////////////////////
// https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html


const router = require('express').Router();
const User = require('../models/user-model');
const Post = require('../models/post-model');
const keys = require('../config/keys');

// Helper function for verifying if user is logged in
const authCheck = (req, res, next) => {
	var user = req.user;
	if (!user) {
		console.log("User not logged in");
		res.send('login');
	} else {
		next();
	}
};

const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/uploads/',
  fileFilter: 'imageFilter',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + req.user.id + '.jpg');
  }
});

var upload = multer({ storage: storage });
// var upload = multer({ 
// 	dest: './public/uploads/',
// 	fileFilter: imageFilter
// })

// Creating post object and saving to DB
router.post('/create', authCheck, upload.single('imageFile'), (req, res, next) => {
	console.log(req.body);
	console.log(req.file);

	let newPost = new Post({
		postAuthor: req.user.id,
		postCreatedDate: Date.now(),
		postTitle: req.body.postTitle,
		postDescription: req.body.postDescription,
		postVotes: [],
		postImg: req.file.path
	});
	newPost.save().then((x) => {
		console.log('Saved: '+x);
	})
	res.redirect('/');
})

// Load all posts
router.get('/loadall', (req, res) => {
	Post.find({}, (err, allPosts) => {
		res.send(allPosts);
	});
});

// Load spesific post
router.post('/load', authCheck, (req, res) => {
	console.log(req.body);
	Post.findOne({_id : req.body.postId}).then((response) => {
		console.log(response);
		res.send(response);
	})
});

// Vote spesific post
router.post('/vote', authCheck, (req, res) => {
	let user = {userId: req.user.id}
	Post.findOneAndUpdate(
		{_id : req.body.postId},
		{$push: {postVotes: user}}
		).then((response) => {
		res.send(response);
	})
});

// Unvote spesific post
router.post('/unvote', authCheck, (req, res) => {
	console.log(req.user.id);
	Post.update(
		{_id : req.body.postId},
		{$pull: {postVotes: {userId: req.user.id}}}
		).then((response) => {
		res.send(response);
	});
});

// Responds with the userID
router.get('/', authCheck, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});



module.exports = router;