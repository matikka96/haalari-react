
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
const jwt = require("jsonwebtoken");


// Verify user with JWT
function verifyUser(req, res, next) {	
	// Usertoken from front-end
  let token = req.body.token;
		jwt.verify(token, keys.jwt.secret, (err, authData) => {
			if (err) {
				res.json({message: 'User not verified'});
			} else {
				console.log('authData: '+JSON.stringify(authData));
				let userId = authData.user;
				console.log('userId: '+userId);
		    User.findOne({_id: userId}).then((currentUser) => {
			    if (currentUser) {
			      console.log('User found');
			      // done(null, currentUser);
			      req.userId = userId;
			      next();
			    } else {
			      res.json({message: 'User not found'});
			    }
			  })
			}
	  });
}

// DEPRECATED
// Helper function for verifying if user is logged in
// const authCheck = (req, res, next) => {
// 	var user = req.user;
// 	if (!user) {
// 		console.log("User not logged in");
// 		res.send('login');
// 	} else {
// 		next();
// 	}
// };

router.post('/test', verifyUser, (req, res) => {
	console.log('/test: Verified as userId: '+req.userId);
	res.send('ok');
});

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
router.post('/create', verifyUser, upload.single('imageFile'), (req, res, next) => {
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
router.post('/load', verifyUser, (req, res) => {
	// console.log(req.body);
	Post.findOne({_id : req.body.postId}).then((response) => {
		// console.log(response);
		res.send(response);
	})
});

// Vote spesific post
router.post('/vote', verifyUser, (req, res) => {
	let user = {userId: req.userId};
	Post.findOneAndUpdate(
		{_id : req.body.postId},
		{$push: {postVotes: user}}
		).then((response) => {
		res.send(`Post with id: ${req.userId} voted`);
	})
});

// Unvote spesific post
router.post('/unvote', verifyUser, (req, res) => {
	Post.update(
		{_id : req.body.postId},
		{$pull: {postVotes: {userId: req.userId}}}
		).then((response) => {
		res.send(`Post with id: ${req.userId} unvoted`);
	});
});

// // Responds with the userID
// router.get('/', verifyUser, (req, res) => {
// 	console.log(req.user);
// 	res.send(req.user);
// });



module.exports = router;