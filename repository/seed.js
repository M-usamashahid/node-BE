"use strict";

var repository              = require('./index');
var user                    = require('./user.json');
var models                  = require('../models/index').allModels;
var constants               = require('constants');
var response                = require('./../controllers/index');

exports.seed = function(app){

    app.get('/seed', function (req, res) {
        repository.getData(models.UserModel,{email:user.email},true)
            .then(function (data) {
                if(data){
                    response.send(400,{
                        "status":false,
                        "response":null,
                        "error":constants.user_registeration
                    },res);
                    return;
                }
                repository.registerUser(models.UserModel,user)
                    .then(function (success) {
                        response.send(200,{
                            "status": true,
                            "response": 'Seed User register successfully',
                            "error": null
                        },res);
                    })
            })
    });

};

