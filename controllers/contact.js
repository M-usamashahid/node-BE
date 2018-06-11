"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var constants               = require('../repository/constants');
var response                = require('./index');

/**
 * @api {post} /contact  Create Contact
 * @apiDescription Create a new message.
 * @apiName CreateContact
 * @apiGroup Contact
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name      Mandatory Contact Name.
 * @apiParam {String} email     Mandatory Contact Email.
 * @apiParam {String} message   Contact Message.
 *
 * @apiSuccess (200) {Boolean}  status True if returning data.
 * @apiSuccess (200) {Object}   response key value pairs of data
 * @apiSuccess (200) {String}   error Null
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	        name            : 'John',
                email           : 'john@email.com',
                message         : 'some text here'
            },
*     }
 * @apiError (400) {Boolean} status     False if error occured.
 * @apiError (400) {Object} response    null
 * @apiError (400) {String} error       Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : 'Required fields missing',
*     }
 */

function create(req, res){
    var body  = req.body;
    console.log('/ Create ------------------');
    console.log(body);
    if(!body.name || !body.email || !body.message){
        response.send(400,{
            "status":false,
            "response":null,
            "error":constants.fields_missing
        },res);
        return;
    }

    var obj = {
        name            : body.name,
        email           : body.email,
        message         : body.message
    };

    repository.saveData(models.ContactModel,obj)
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

/**
 * @api {get} /contact  Get All Contact
 * @apiDescription Get all messenger records
 * @apiName GetContact
 * @apiGroup Contact
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean} status           True if returning data.
 * @apiSuccess (200) {Array}   response         Objects of array.
 * @apiSuccess (200) {String}  response.name    messenger name.
 * @apiSuccess (200) {String}  response.email   messenger email.
 * @apiSuccess (200) {String}  response.message messenger message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
 *       	status : true,
 *       	response : [{
      	        name            : 'John',
                email           : 'john@email.com',
                message         : 'some text here'
            }],
            error : null
 *     }
 *
 * @apiError (400) {Boolean} status False if error occured.
 * @apiError (400) {String} error   Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : 'Required fields missing',
*     }
 */

function get(req, res){

    repository.getData(models.ContactModel,{},false, null)
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
 * @api {get} /contact/:id  Get Contact
 * @apiDescription Get a specific messenger record
 * @apiName GetContactById
 * @apiGroup Contact
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean} status           True if returning data.
 * @apiSuccess (200) {Object}  response         key value pairs
 * @apiSuccess (200) {String}  response.name    messenger name
 * @apiSuccess (200) {String}  response.email   messenger email
 * @apiSuccess (200) {String}  response.message messenger message
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : {
      	        name            : 'John',
                email           : 'john@email.com',
                message         : 'some text here'
            },
            error : null
*     }
 * @apiError (400) {Boolean} status False if error occured.
 * @apiError (400) {String} error   Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : 'Required fields missing',
*     }
 */

function getByID(req, res){

    if(req.params && req.params.id){

        var body  = req.params;
        var query = {
            _id : body.id
        };
        repository.getData(models.ContactModel,query,true)
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
 * @api {put} /contact/:id  Update Contact
 * @apiDescription Update a specific messenger record by Id
 * @apiName UpdateContactById
 * @apiGroup Contact
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String} name      messenger name (Optional)
 * @apiParam {String} email     messenger email (Optional)
 * @apiParam {String} message   messenger message (Optional)
 *
 * @apiSuccess (200) {Boolean} status   True if update successfully
 * @apiSuccess (200) {Boolean} response True if update successfully
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : true,
            error : null
*     }
 * @apiError (400) {Boolean} status False if error occured.
 * @apiError (400) {String} error   Error message
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
*       	status : false,
*       	response : null,
*		 	errors : ' eg : Required fields missing',
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
        repository.updateData(models.ContactModel,query,body)
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
}

/**
 * @api {delete} /contact/:id  Delete Contact
 * @apiDescription Delete a specific Contact by Id.
 * @apiName DeleteContact
 * @apiGroup Contact
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
 * @apiError (400) {Boolean} status     False if error occurred.
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
        repository.updateData(models.ContactModel,query,{isDeleted: true})
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

exports.create              = create;
exports.get                 = get;
exports.getByID             = getByID;
exports.updateByID          = updateByID;
exports.deleteByID          = deleteByID;
