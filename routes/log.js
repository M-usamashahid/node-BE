"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/log");

exports.log = function(app,requiresToken){

    app.route(apiVersion+'/logs')
        .get    (requiresToken, Controller.get);


};

