const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
var nodemailer = require('nodemailer');

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

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chameleondb", {
      useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  }
).then(() => console.log('Database connected successfully')).catch(err => console.log(err));

app.use((err, req, res, next) => {
  console.log(err);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/sendEmail', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(lastName);
  console.log(firstName);
  console.log(email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chameleon.sheets@gmail.com',
      pass: 'ChameleonSheets11$'
    }
  });
  const userOptions = emailOptions(firstName, lastName, email)
  transporter.sendMail(userOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.end()

})
app.listen(port, () => {
  console.log('Server running on port ' + port)
});

/**email stuff */

function emailOptions(firstName, lastName, email) {
  console.log("from enail options" + firstName)
  let emailOptions = {}
  emailOptions.from = 'chameleon.sheets@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'Sign up with Chameleon Sheets';
  emailOptions.html = `<h1> Hello ${firstName} ${lastName}, please go to <a>localhost:3000/signup/<a> to complete your profile! </h1>`;
  return emailOptions
};
