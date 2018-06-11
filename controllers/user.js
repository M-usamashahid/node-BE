"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var bcrypt                  = require('bcrypt-nodejs'); //password encryption
var constants               = require('../repository/constants');
var response                = require('./index');
var logger                  = require('../config/log');
var jwt                     = require('jsonwebtoken');
var config                  = require('../config/config');


/**
 * @api {post} /user  Create User
 * @apiDescription Create a new User.
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   firstName         Mandatory First Name.
 * @apiParam {String}   lastName          Mandatory Last Name.
 * @apiParam {String}   email             Mandatory Email Address.
 * @apiParam {String}   password          Mandatory password.
 * @apiParam {String}   avatar_url        Avatar picture URL.
 * @apiParam {String}   url               Info web Url (Optional).
 * @apiParam {String}   skypeId           Skype Id (Optional).
 * @apiParam {String}   socialNetworkURL  Social profile URL (Optional).
 * @apiParam {String}   description       description/bio (Optional).
 * @apiParam {String}   address           Address (Optional).
 * @apiParam {Boolean}  isAdmin           Super User if yes or not.
 *
 * @apiSuccess (200) {Boolean} status     True if returning data.
 * @apiSuccess (200) {Object} response    key value pairs of data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	        firstName            : 'John',
      	        lastName             : 'Mac',
                email                : 'john@email.com',
                password             : *****,
                avatar_url           : 'http://.....'
            },
            error : null
*     }
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	error : 'e.g. : Required fields missing',
*     }
 */

function create(req, res){
    var body  = req.body;
    console.log('/ Create ------------------');
    console.log(body);
    if(!body.firstName || !body.lastName || !body.email || !body.password ){
        response.send(400,{
            "status":false,
            "response":null,
            "error":constants.fields_missing
        },res);
        return;
    }
    repository.getData(models.UserModel,{email:body.email},true)
        .then(function (usr) {
            if(usr){
                response.send(400,{
                    "status":false,
                    "response":null,
                    "error":constants.user_registeration
                },res);
                return;
            }else{
                var obj = {
                    firstName           : body.firstName,
                    lastName            : body.lastName,
                    email               : body.email,
                    password            : body.password,
                    avatar_url          : body.avatar_url,
                    url                 : body.url,
                    skypeId             : body.skypeId,
                    socialNetworkURL    : body.socialNetworkURL,
                    description         : body.description,
                    address             : body.address,
                    isAdmin             : body.isAdmin
                };

                repository.registerUser(models.UserModel,obj)
                    .then(function(data){
                        response.send(200,{
                            "status": true,
                            "response": data,
                            "error": null
                        },res);

                    },function(err){
                        console.log("error in saving the data");
                        response.send(401,{
                            "status":false,
                            "response":null,
                            "error":err
                        },res)
                    });
            }
        });
}

/**
 * @api {get} /user  Get All Users
 * @apiDescription Get All Users.
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean}  status                    True if returning data.
 * @apiSuccess (200) {Array}    response                  Objects of array
 * @apiSuccess (200) {String}   response.firstName        First Name.
 * @apiSuccess (200) {String}   response.lastName         Last Name.
 * @apiSuccess (200) {String}   response.email            Email Address.
 * @apiSuccess (200) {String}   response.avatar_url       Avatar picture URL.
 * @apiSuccess (200) {String}   response.url              Info web Url (Optional).
 * @apiSuccess (200) {String}   response.skypeId          Skype Id (Optional).
 * @apiSuccess (200) {String}   response.socialNetworkURL Social profile URL (Optional).
 * @apiSuccess (200) {String}   response.description      Description/bio (Optional).
 * @apiSuccess (200) {String}   response.address          Address (Optional).
 * @apiSuccess (200) {Boolean}  response.isAdmin          Super User if yes or not.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : [{
      	        firstName            : 'John',
      	        lastName             : 'Mac',
                email                : 'john@email.com',
                avatar_url           : 'http://.....'
                ....
        }],
            error : null
*     }
 *
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : 'e.g. : Required fields missing',
*     }
 */

function get(req, res){

    repository.getData(models.UserModel,{},false, null)
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

function getAdmin(req, res){
console.log('aslkhdlaks')
    repository.getData(models.UserModel,{isAdmin : true},true, null)
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

/**
 * @api {get} /user/:id  Get User
 * @apiDescription Get a specific User by Id.
 * @apiName GetUserById
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean} status                    True if returning data.
 * @apiSuccess (200) {Object}  response                  key value pairs
 * @apiSuccess (200) {String}  response.firstName        First Name.
 * @apiSuccess (200) {String}  response.lastName         Last Name.
 * @apiSuccess (200) {String}  response.email            Email Address.
 * @apiSuccess (200) {String}  response.avatar_url       Avatar picture URL.
 * @apiSuccess (200) {String}  response.url              Info web Url (Optional).
 * @apiSuccess (200) {String}  response.skypeId          Skype Id (Optional).
 * @apiSuccess (200) {String}  response.socialNetworkURL Social profile URL (Optional).
 * @apiSuccess (200) {String}  response.description      Description/bio (Optional).
 * @apiSuccess (200) {String}  response.address          Address (Optional).
 * @apiSuccess (200) {Boolean} response.isAdmin          Super User if yes or not.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : {
      	        firstName            : 'John',
      	        lastName             : 'Mac',
                email                : 'john@email.com',
                avatar_url           : 'http://.....'
                ....
        },
            error : null
*     }
 *
 * @apiError (400) {Boolean} status         False if error occured.
 * @apiError (400) {String} error           Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : 'e.g. : Required fields missing',
*     }
 */

function getByID(req, res){

    if(req.params && req.params.id){

        var body  = req.params;
        var query = {
            _id : body.id
        };
        repository.getData(models.UserModel,query,true)
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
}

/**
 * @api {put} /user/:id  Update User
 * @apiDescription Update a specific User by Id.
 * @apiName UpdateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   firstName         First Name (Optional).
 * @apiParam {String}   lastName          Last Name (Optional).
 * @apiParam {String}   email             Email Address (Optional).
 * @apiParam {String}   avatar_url        avatar picture URL (Optional).
 * @apiParam {String}   url               Info web Url (Optional).
 * @apiParam {String}   skypeId           Skype Id (Optional).
 * @apiParam {String}   socialNetworkURL  Social profile URL (Optional).
 * @apiParam {String}   description       description/bio (Optional).
 * @apiParam {String}   address           Address (Optional).
 * @apiParam {Boolean}  isAdmin           Super User if yes or not (Optional).
 *
 * @apiSuccess (200) {Boolean} status     True if update successfully.
 * @apiSuccess (200) {Object}  response   True if update successfully.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : true,
            error : null
*     }
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	error : 'e.g. : Required fields missing',
*     }
 */

function updateByID(req, res){
    if(req.params && req.params.id){

        var body  = {$set : req.body};
        console.log('/ Update ------------------');
        console.log(body);

        var query = {
            _id : req.params.id
        };
        repository.updateData(models.UserModel,query,body)
            .then(function(data){
                response.send(200,{
                    "status": true,
                    "response": true,
                    "error": null
                },res);
            },function(err){
                console.log("error in saving the data");
                response.send(401,{
                    "status":false,
                    "response":null,
                    "error":err
                },res)
            });
    }
}

/**
 * @api {delete} /user/:id  Delete User
 * @apiDescription Delete a specific User by Id.
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean} status     True if delete successfully.
 * @apiSuccess (200) {Object}  response   True if delete successfully.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : true,
            error : null
*     }
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	error : 'e.g. : Required fields missing',
*     }
 */

function deleteByID(req, res){

    if(req.params && req.params.id){

        var query = {
            _id : req.params.id
        };
        repository.updateData(models.UserModel,query,{isDeleted: true})
            .then(function (data) {
                    if (!data) {
                        response.send(401,{
                            "status":false,
                            "response":null,
                            "error":constants.not_found
                        },res);
                    } else if (data) {
                        response.send(200,{
                            "status":true,
                            "response":true,
                            "error":null
                        },res);
                    }
                },
                function(err){
                    if (err) console.log(err);
                });

    }else{

        response.send(400,{
            "status":true,
            "response":null,
            "error":'Missing required parameter '
        },res);

    }
}

/**
 * @api {post} /user/login  Login User
 * @apiDescription Login a User.
 * @apiName LoginUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String}   email             Mandatory Email Address.
 * @apiParam {String}   password          Mandatory password.
 *
 * @apiSuccess (200) {Boolean} status     True if authentication success full.
 * @apiSuccess (200) {String} response    authentication token
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : jhdskjfhlsjkflksjdfs.... ,
            error : null
*     }
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	error : 'e.g. : Required fields missing',
*     }
 */

function login (req, res){
    var body  = req.body;
    console.log('/authentication ------------------');
    console.log(body);

    var query = {
        email : body.email
    };
    repository.getData(models.UserModel,query,true)
        .then(function (user) {
                if (!user) {
                    response.send(401,{"status":false, "response":null, "error":constants.authentication_failed },res);
                }else if (user) {

                    // console.log(user,'line 176 -----data Login-----');
                    bcrypt.compare(body.password, user.password, function (err, result) {
                        if (result) {
                            // sign asynchronously
                            var obj = {
                                action : 'Login',
                                userId : user._id
                            };
                            repository.saveData(models.LogModel,obj);
                            jwt.sign({data : user}, config.secret, function(err, token) {
                                response.send(200,
                                    {
                                        "status":true,
                                        "response":token,
                                        "error":null
                                    },res);
                            });
                        } else {
                            console.log(err, 'Password not matched ----------- data')
                            if (checkIfAJAXRequest(req)) {
                                console.log("JSON Found User Not Authenticated!");
                                response.send(400,{"status":false, "response":null, "error":constants.error_login },res);
                            } else {
                                console.log("Not a JSON Request User Not Authenticated!");
                                response.send(400,{"status":false, "response":null, "error":constants.incorrect_user_password },res);
                            }

                        }
                    });
                }
            },
            function(err){
                if (err) console.log(err);
            });
}

function checkIfAJAXRequest(req) {

    return (req.headers && ((req.headers['x-requested-with'] && req.headers['x-requested-with'] == 'XMLHttpRequest')
    || (req.headers['content-type'].indexOf('application/json') != -1)) ? true : false);
}

exports.create              = create;
exports.get                 = get;
exports.getByID             = getByID;
exports.getAdmin            = getAdmin;
exports.updateByID          = updateByID;
exports.deleteByID          = deleteByID;
exports.login               = login;
