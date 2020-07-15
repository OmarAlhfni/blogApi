var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('./helper/auth')

// cors --
var cors = require('cors')

var hashPass = require('./helper/passwoed');

// hashPass('123').then('true').catch('false');
// to check if success or faild of function

// router ----
var indexRout = require('./routes/index')
var usersRouter = require('./routes/users');
var Tags = require('./routes/Tags')
var Posts = require('./routes/Posts')
var Comments = require('./routes/Comments')
var Catagories = require('./routes/Catagories')
var Register = require('./routes/Register')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

// possport 
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var auth = passport.authenticate('jwt')
// router links
app.use('/ind', indexRout)
app.use('/users', usersRouter);
app.use('/Tags', Tags);
app.use('/Posts', auth, Posts);
app.use('/Comments', Comments);
app.use('/Catagories', Catagories);
app.use('/Register', Register)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
