"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var constants               = require('../repository/constants');
var response                = require('./index');





function get(req, res){

    repository.getData(models.LogModel,{},false, null,'userId',null,null,'firstName lastName email')
        .then(function (data) {
                if (!data) {
                    response.send(404,{
                        "status":false,
                        "response":null,
                        "error":constants.not_found
                    },res);
                } else if (data) {
                    response.send(200,{
                        "status":true,
                        "response":data,
                        "error":null
                    },res);
                }
            },
            function(err){
                if (err) console.log(err);
            });

}

exports.get                 = get;

