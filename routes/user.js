"use strict";

var apiVersion = '/api/v1';
var Controller = require("../controllers/user");

exports.user = function(app,requiresToken){

    app.route(apiVersion+'/user')
        .get    (Controller.get)
        .post   (requiresToken, Controller.create);

    app.get(apiVersion+'/user/admin', Controller.getAdmin);
    app.route(apiVersion+'/user/:id')
        .get    (requiresToken, Controller.getByID)
        .delete (requiresToken, Controller.deleteByID)
        .put    (requiresToken,Controller.updateByID);


    app.post(apiVersion+'/user/login', Controller.login);

};

