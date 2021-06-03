var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var encryptionKindsRouter = require('./routes/encryption_kinds');
var xorOperationInfoRouter = require('./routes/xor_operation_info');
var rsaOperationInfoRouter = require('./routes/rsa_operation_info');
var xorEncryptionRouter = require('./routes/xor_encryption');
var rsaEncryptionRouter = require('./routes/rsa_encryption');
var rsaEncryptionSimRouter = require('./routes/rsa_encryption_simulation');
var xorEncryptionSimRouter = require('./routes/xor_encryption_simulation');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sifravimo_tipai', encryptionKindsRouter);
app.use('/xor_veikimo_principas', xorOperationInfoRouter);
app.use('/rsa_veikimo_principas', rsaOperationInfoRouter);
app.use('/xor_sifravimas', xorEncryptionRouter);
app.use('/rsa_sifravimas', rsaEncryptionRouter);
app.use('/asimetrinio_sifravimo_simuliacija', rsaEncryptionSimRouter);
app.use('/simetrinio_sifravimo_simuliacija', xorEncryptionSimRouter);

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
