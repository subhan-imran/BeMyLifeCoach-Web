const express = require("express");
const http = require("http");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

const router = express.Router();
const server = http.createServer(router);

function newsLetterMail({ mail }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      secure: true,
      port: 465,
      auth: {
        user: "info@bemylifecoach.com",
        pass: "TomRice123!",
      },
    });
    const mailOptions = {
      from: `${mail} Contact Info`,
      to: "info@bemylifecoach.com",
      subject: `Newsletter Info`,
      text: `   NewsLetter Info  \n Email: ${mail}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "Error Occured" });
      } else {
        console.log("Email Sent");
        return resolve({ message: "Email Sent" });
      }
    });
  });
}

function signUpMail({ email, name, phone, address, message }) {
  //! Html Form not working
  /*
  const source = fs
    .readFileSync("../public/templates/signup-email.html", "utf-8")
    .toString();
  const template = handlebars.compile(source);
  const replacements = {
    name,
    email,
    phone,
    address,
    message,
  };
  const htmlToSend = template(replacements);
  */

  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      secure: true,
      port: 465,
      auth: {
        user: "info@bemylifecoach.com",
        pass: "TomRice123!",
      },
    });
    const mailOptions = {
      from: `${name} Contact Info`,
      to: "info@bemylifecoach.com",
      subject: name,
      text: `    SignUp Info \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Address: ${address} \n Message: ${message}`,
      // html: htmlToSend,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "Error Ocurred" });
      } else {
        console.log("Email Sent");
        return resolve({ message: "Email Sent" });
      }
    });
  });
}

router.post("/api/contactform/signup", (req, res) => {
  signUpMail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

router.post("/api/contactform/newsletter", (req, res) => {
  signUpMail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
