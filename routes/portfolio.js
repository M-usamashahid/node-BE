"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/portfolio");

exports.portfolio = function(app,requiresToken){

    app.route(apiVersion+'/portfolio')
        .get    ( Controller.get)
        .post   (requiresToken, Controller.create);


    app.route(apiVersion+'/portfolio/:id')
        .get    (requiresToken, Controller.getByID)
        .delete (requiresToken, Controller.deleteByID)
        .put    (requiresToken,Controller.updateByID);


};

