'use strict';

var winston     = require('winston');
var config      = require('./config');

var logger;

//winston.remove(winston.transports.Console);

var date = new Date().getDate();
var month = new Date().getMonth() +1;
var year = new Date().getFullYear();
var fullDate = date+ '-'+month+'-'+year;
logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            filename: config.root + '/log/'+fullDate + '.log',
            maxsize: config.logMaxFileSize,
            maxfiles: 10
        })
    ]
});
module.exports = logger;
