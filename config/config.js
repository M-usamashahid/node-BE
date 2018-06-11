require('dotenv').config();


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var path = require('path');

var config = {

    root: path.resolve(__dirname + '/../'),

    port: process.env.PORT,

    logMaxFileSize: process.env.logMaxFileSize,

    logMaxFiles: process.env.logMaxFiles,

    secret: process.env.secret
};


module.exports = config;
