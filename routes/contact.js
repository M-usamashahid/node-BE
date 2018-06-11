"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/contact");

exports.contact = function(app,requiresToken){

    app.route(apiVersion+'/contact')
        .get    (requiresToken, Controller.get)
        .post   (Controller.create);


    app.route(apiVersion+'/contact/:id')
        .get    (requiresToken, Controller.getByID)
        .delete (requiresToken, Controller.deleteByID)
        .put    (requiresToken,Controller.updateByID);


};

