var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var db = require('./db.js');
var routes = require('./routes/index');


var app = express();

var sessionStore = new session.MemoryStore;
require('./config/passport')(passport);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mylendingtomerchantssectret'
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next();}
  console.log('not able to authenticat');
  res.redirect('/admin');
}

//app.use('/', routes);
app.get('/', routes.getHomepage);
app.get('/admin', routes.getAdminLoginForm);
app.get('/adminSignUp', routes.getAdminSignUpPage);
app.get('/admin/dashboard', isLoggedIn, routes.adminDashboard);
app.get('/quotes', isLoggedIn, routes.getQuotes);
app.post('/quoteRequest', routes.saveQuote);
app.post('/adminLogin', passport.authenticate('local-login', {
  successRedirect: '/admin/dashboard',
  failureRedirect: '/admin',
  failureFlash : true
}));
app.post('/adminSignup', passport.authenticate('local-signup', {
  successRedirect: '/admin',
  failureRedirect: '/signup',
  failureFlash : true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
