
const router = require("express").Router();
const db = require("../../models")
const nodemailer = require('nodemailer');

router.route("/")
.post((req, res) => {
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
    res.end();
  });

  function emailOptions(firstName, lastName, email) {
    console.log("from email options " + firstName)
    let emailOptions = {}
    emailOptions.from = 'chameleon.sheets@gmail.com';
    emailOptions.to = email;
    emailOptions.subject = 'Sign up with Chameleon Sheets';
    emailOptions.html = `<p> Hello ${firstName} ${lastName}! </p> <p> Please go to <a style = "color:blue;"> http://localhost:3000/signup/ </a> to complete your profile! </p>`;
    return emailOptions
  };


    module.exports = router;