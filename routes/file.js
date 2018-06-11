"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/imageUpload");

exports.file = function(app,requiresToken){

    app.post(apiVersion + '/image',requiresToken, Controller.imageUpload);

};

