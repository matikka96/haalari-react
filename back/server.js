// Import config keys 
const keys = require('./config/keys');

// Express setup
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3001;

// Enable CORS
const cors = require('cors');
app.use(cors());

// Connect to mongodb with mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongodb.uri, () => {
	console.log('Connected to DB via mongoose');
});

// Initialize passport and cookies
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
const authRoutes = require('./routes/auth-routes');
const postRoutes = require('./routes/post-routes');
// const commentRoutes = require('./routes/comment-routes');
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
// app.use('/comment', commentRoutes);


// 
app.get('/', (req, res) => {
	res.sendFile(__dirname+'/test.html');
});

// 
app.get('/test', (req, res) => {
	res.send(req.user);
});

// Listening PORT
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});