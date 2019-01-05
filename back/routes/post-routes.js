
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
router.post('/create', upload.single('avatar'), function (req, res, next) {
	// req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
	console.log(req.body);
	console.log(req.file);

	// SAVE TO DB HERE

	res.redirect('/');
})

// Responds with the userID
router.get('/', authCheck, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});



module.exports = router;