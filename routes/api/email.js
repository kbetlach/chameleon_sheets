
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
    console.log(student)
    console.log(lastName);
    console.log(firstName);
    console.log(email);
    console.log(role)
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chameleon.sheets@gmail.com',
        pass: 'ChameleonSheets11$'
      }
    });
    const userOptions = emailOptions(firstName, lastName, email, role, student)
    transporter.sendMail(userOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.end();
  });

function emailOptions(firstName, lastName, email, role, student) {
  console.log("from email options " + firstName + role)
  let emailOptions = {}
  emailOptions.from = 'chameleon.sheets@gmail.com';
  emailOptions.to = email;
  emailOptions.subject = 'Sign up with Chameleon Sheets';
  if (role === "Teacher") {
    emailOptions.html = `<p> Hello ${firstName} ${lastName}! <br> Welcome to the team! Please click this <a href= "http://localhost:3000/signup/"> link </a> to complete your profile! </p> <p> Thanks, <br> your friends at Chameleon Cooperative </p>`;
    
  }
  else {
    emailOptions.html = `<p> Hello ${firstName} ${lastName}! <br> We're delighted to have your student at our school! Please click this <a href= "http://localhost:3000/signup/"> link </a> to complete your profile! </p> <p> Thanks, <br> your friends at Chameleon Cooperative </p>`;
  
  }
  return emailOptions
};


module.exports = router;