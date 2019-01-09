const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require('../models/user-model');

// Auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Auth with google
router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log('Creating JWT token: ')
  jwt.sign({user: req.user._id}, keys.jwt.secret, (err, token) => {
    console.log(token);    
    res.redirect('http://localhost:3001/?token='+token)
  });
});

// 
router.get("/user/:token", (req, res) => {
  console.log(req.params);
  red.send(req.params.token);
});

// callback route for google to redirect to
router.get("/profile", (req, res) => {
  res.send(req.user);
});

module.exports = router;
