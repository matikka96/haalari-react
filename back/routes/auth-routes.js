const router = require("express").Router();
const passport = require("passport");

// Auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  var token = req.user.token;
  console.log(req.user)
  res.redirect("http://localhost:3000?token=" + token);
  // res.send(req.user);
  // res.redirect('/auth/profile')
});

// callback route for google to redirect to
router.get("/profile", (req, res) => {
  res.send(req.user);
});

module.exports = router;
