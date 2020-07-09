const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes')
require('dotenv').config();
var session = require("express-session");
var passport = require("./config/passport");

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up session and passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add API routes
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bschameleondb", {
      useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  }
).then(() => console.log('Database connected successfully')
).catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.log(err);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log('Server running on port ' + port)
});


