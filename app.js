const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

const app = express();

// view engine setup

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  store: new FileStore(),
  secret: 'known',
  resave: false,
  saveUninitialized: true,
  is_logged_in: false
}));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.get('/favicon.ico', (req, res) => res.status(204));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
