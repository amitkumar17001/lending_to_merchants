var express = require('express');
var router = express.Router();
var QuoteRequestsSchema = require('../models/quoteRequests');
var nodeMailer = require('nodemailer');
var Promise = require('bluebird');

exports.getHomepage = function(req, res) {
  res.render('index', { title: 'Lending 2 Merchants' });
};

exports.getAdminLoginForm = function(req, res) {
  res.render("adminLoginForm",  { title: 'Login Form' });
};

exports.getAdminSignUpPage = function(req, res) {
  res.render("adminSignup", {
  });
};

exports.adminDashboard = function (req, res) {
  res.render("adminHomePage", {
    title: 'Admin Dashboard',
    user:  req.user
  });
};

exports.saveQuote = function(req, res){
  console.log(req.body);
  var fullName = req.body.fullName;
  var companyName  = req.body.companyName;
  var amountNeeded = req.body.amountNeeded;
  var yearsInBusiness = req.body.yearsInBusiness;
  var phoneNumber = req.body.phoneNumber;
  var emailAddress = req.body.emailAddress;
  var currentDate = new Date;
  var NewQuoteRequest = new QuoteRequestsSchema({
    fullName: fullName,
    companyName: companyName,
    amountNeeded: amountNeeded,
    yearsInBusiness: yearsInBusiness,
    phoneNumber: phoneNumber,
    emailAddress: emailAddress,
    date: currentDate
  });
  NewQuoteRequest.save(function(err){
    if (err) throw err;
    console.log('Quote Saved Successfully!');
    var transporter = nodeMailer.createTransport('smtps://info%40lending2merchants.com:Password@123@smtp.1and1.com');
    var text = 'New Quote Request from : ' + req.body.fullName +'\n\n Email Address : ' + req.body.emailAddress + '\n\n Phone Number : '+ req.body.phoneNumber
        + '\n\n Ammout Needed: '+ req.body.amountNeeded + ' \n\n Company Name : ' + req.body.companyName;
    var mailOptions = {
      from: '"Info @ lendning To Merchants" <info@lending2merchants.com>',
      to: 'sam.malhotra@ksncommunications.com, sammalhotra@gmail.com' ,
      subject: 'Quote Request', // Subject line
      text: text
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
        res.json({yo: 'error'});
      }else{
        console.log('Message sent: ' + info.response);
        res.redirect('/')
      };
    });
  });
};

exports.getQuotes = function(req, res) {
  QuoteRequestsSchema.find({}, function(err, quotes){
    if (err) {
      console.log(err);
      res.status(500).json({status: 'failure'})
    } else{
      var quoteList = quotes.sort(function(a, b){
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
        return 0;
      });
      res.render("adminQuoteRequests", {
        title : 'Requested Quotes',
        quotes: quoteList
      });
    }
  });
};

