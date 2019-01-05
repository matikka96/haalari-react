const router = require('express').Router();
const User = require('../models/user-model');
// const Favorite = require('../models/favorite-model');
const keys = require('../config/keys');

// Importing Axios
// const axios = require('axios');

"use strict";

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

// Responds with the userID
router.get('/', authCheck, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});



module.exports = router;