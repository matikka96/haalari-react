
// TODO
////////////////////////////////////////////////////////
// /create:
// * verify filename
// * max filesize
////////////////////////////////////////////////////////
// https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html

const router = require('express').Router();
const fileUpload = require('express-fileupload');
const User = require('../models/user-model');
const Post = require('../models/post-model');
const keys = require('../config/keys');
const jwt = require("jsonwebtoken");

// Verify user with JWT
function verifyUser(req, res, next) {	
	console.log("Verifying user...");
	// Usertoken from front-end
  let token = req.body.token;
		jwt.verify(token, keys.jwt.secret, (err, authData) => {
			if (err) {
				res.json({message: 'User not verified'});
			} else {
				// console.log('authData: '+JSON.stringify(authData));
				let userId = authData.user;
				// console.log('userId: '+userId);
		    User.findOne({_id: userId}).then((currentUser) => {
			    if (currentUser) {
			      // console.log('User found');
			      req.user = currentUser;
			      next();
			    } else {
			      res.json({message: 'User not found'});
			    }
			  })
				}
	});
}

router.post('/test', verifyUser, (req, res) => {
	console.log('/test: Verified as user (Id): '+req.user._id);
	
	res.send('ok');
});

// Vote spesific post
router.post('/vote', verifyUser, (req, res) => {
	let user = {userId: req.user._id};
	Post.findOneAndUpdate(
		{_id : req.body.postId},
		{$push: {postVotes: user}}
		).then((response) => {
			
			res.send(`Post with id: ${req.user._id} voted`);
	})
});

// Unvote spesific post
router.post('/unvote', verifyUser, (req, res) => {
	Post.update(
		{_id : req.body.postId},
		{$pull: {postVotes: {userId: req.user._id}}}
		).then((response) => {
			
			res.send(`Post with id: ${req.user._id} unvoted`);
	});
});

router.post('/profile', verifyUser, (req, res) => {
	// console.log('/profile')
	res.send(req.user);
})

router.use(fileUpload());

router.post("/upload", verifyUser, function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let selectedImage = req.files.selectedImage;
	const imagePath = `public/uploads/${selectedImage.name}`;
  // Use the mv() method to place the file somewhere on your server
  selectedImage.mv(imagePath, function(err) {
    if (err) return res.status(500).send(err);
		else {
			new Post({
        postAuthor: req.user._id,
        postCreatedDate: Date.now(),
        postTitle: req.body.title,
        postDescription: req.body.description,
        postVotes: [],
        postImg: imagePath
      }).save().then(() => {
				console.log('Post created');
				res.json({
					message: 'Post created'
				});
			});
		}
  });
});


module.exports = router;