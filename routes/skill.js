"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/skill");

exports.skill = function(app,requiresToken){

    app.route(apiVersion+'/skill')
        .get    ( Controller.get)
        .post   (requiresToken, Controller.create);


    app.route(apiVersion+'/skill/:id')
        .get    (requiresToken, Controller.getByID)
        .delete (requiresToken, Controller.deleteByID)
        .put    (requiresToken,Controller.updateByID);


};

