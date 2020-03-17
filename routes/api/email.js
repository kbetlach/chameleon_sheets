
const router = require("express").Router();
const db = require("../../models")
const nodemailer = require('nodemailer');

router.route("/")
  .post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const role = req.body.role;
    const student = req.body.student;
    const key = req.body.key;

    console.log(student)
    console.log(lastName);
    console.log(firstName);
    console.log(email);
    console.log(role);
    console.log(key);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chameleon.sheets@gmail.com',
        pass: 'ChameleonSheets11$'
      }
    });

    const userOptions = emailOptions(firstName, lastName, email, role, student, key)

    transporter.sendMail(userOptions, function (error, info) {

      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
    res.end();
  });

function emailOptions(firstName, lastName, email, role, student, key) {
  console.log("from email options " + firstName + role)
  let emailOptions = {}
  emailOptions.from = 'chameleon.sheets@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'Sign up with Chameleon Sheets';
  if (role === "Teacher") {
    emailOptions.html = `<p> Hello ${firstName} ${lastName}! <br> Welcome to the team! Please click this <a href= "https://chameleon-sheets.herokuapp.com/signup"> link </a> to complete your profile! </p>  <p>You'll need this unique key:  ${key}</p> <p> Thanks, <br> your friends at Chameleon Cooperative </p>`;
    
  }
  else {
    emailOptions.html = `<p> Hello ${firstName} ${lastName}! <br> We're delighted to have your student at our school! Please click this <a href= "https://chameleon-sheets.herokuapp.com/signup"> link </a> to complete your profile! </p> <p>You'll need this unique key:  ${key}</p> <p> Thanks, <br> your friends at Chameleon Cooperative </p>`;
  
  }
  return emailOptions
};


module.exports = router;