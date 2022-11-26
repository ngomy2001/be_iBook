var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/api/auth');
const accountRouter = require('./routes/api/account');
const authorRouter = require('./routes/api/author');
const publisherRouter = require('./routes/api/publisher');
const categoryRouter = require('./routes/api/category');
const bookRouter = require('./routes/api/book');
const bookCopyRouter = require('./routes/api/bookCopy');
const invoiceRouter = require('./routes/api/invoice');
const transactionRouter = require('./routes/api/transaction');

const database = require('./database/connect');

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
const cors = require('cors');
app.use(
  cors({
    origin: '*',
  })
);

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/api/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/author', authorRouter);
app.use('/api/publisher', publisherRouter);
app.use('/api/category', categoryRouter);
app.use('/api/book', bookRouter);
app.use('/api/bookCopy', bookCopyRouter);
app.use('/api/invoice', invoiceRouter);
app.use('/api/transaction', transactionRouter);
app.use('/api/auth', authRouter);

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

database.connect();

module.exports = app;
