

var env             = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config          = require('./config');

// Custom winston logger
var logger          = require('./log');

var express         = require('express');
var methodOverride  = require('method-override');
var cors            = require('cors');
var bodyParser      = require('body-parser');

// gzip/deflate outgoing responses
var compression     = require('compression');

// Express HTTP access and error logging
var morgan          = require('morgan');
var path            = require('path');


module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
    app.use(bodyParser.json({limit: '10mb'}));
    app.disable('x-powered-by');
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, '../static')));
    app.use(cors());
    app.set('superSecret', config.secret);

};