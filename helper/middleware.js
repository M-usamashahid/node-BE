"use strict";

var repository                 = require('../repository/index');
var constants                  = require('./../repository/constants');
var response                   = require("../controllers/index");
var config                     = require("../config/config");
var models                     = require('../models/index').allModels;
var jwt                        = require('jsonwebtoken');

// route middleware to verify a token
exports.requiresToken = function requiresToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['access_token'];

    // decode token
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
            response.send(401,{
                "status":false,
                "response":null,
                "error":err
            },res);
            return
        }
        req.session = decoded.data;
        next()
    });


};

