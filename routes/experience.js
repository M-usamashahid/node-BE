"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/experience");

exports.experience = function(app,requiresToken){

    app.route(apiVersion+'/experience')
        .get    ( Controller.get)
        .post   (requiresToken, Controller.create);


    app.route(apiVersion+'/experience/:id')
        .get    (requiresToken, Controller.getByID)
        .delete (requiresToken, Controller.deleteByID)
        .put    (requiresToken,Controller.updateByID);


};

