const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add API routes
require("./routes/API")(app);
require("./routes/api-james")(app);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chameleondb", {
      useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  }
).then(() => console.log('Database connected successfully')
).catch(err => console.log(err));

app.use((err, req, res, next) => {
  console.log(err);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log('Server running on port ' + port)
});


