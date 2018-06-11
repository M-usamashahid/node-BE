"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var constants               = require('../repository/constants');
var response                = require('./index');


/**
 * @api {post} /portfolio  Create Portfolio
 * @apiDescription Create a new Portfolio.
 * @apiName CreatePortfolio
 * @apiGroup Portfolio
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}           type               Mandatory Admin | Iframe | Login | Site.
 * @apiParam {ArrayOfObject}    picture             Mandatory Array of Objects.
 * @apiParam {String}           picture.URL         Picture URL.
 * @apiParam {String}           picture.language    development language.
 * @apiParam {String}           picture.framework   development framework.
 *
 * @apiSuccess (200) {Boolean} status     True if returning data.
 * @apiSuccess (200) {Object} response    key value pairs of data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	        type               : 'Admin',
      	        picture            : [{
      	            URL         : 'http://.....',
      	            language    : 'JavaScript'/
      	            framework   : 'Angular'
      	        }]
            },
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

function create(req, res){
    var body  = req.body;
    console.log('/ Create ------------------');
    console.log(body);
    if(!body.type){
        response.send(400,{
            "status":false,
            "response":null,
            "error":constants.fields_missing
        },res);
        return;
    }

    var obj = {
        type             : body.type
    };

    repository.saveData(models.PortfolioModel,obj)
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
 * @api {get} /portfolio  Get all Portfolio
 * @apiDescription Get all Portfolio.
 * @apiName GetPortfolio
 * @apiGroup Portfolio
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Boolean}          status                       True if returning data.
 * @apiSuccess (200) {ArrayOfObject}    response                     Array of Objects
 * @apiSuccess (200) {String}           response.type                Mandatory Admin | Iframe | Login | Site.
 * @apiSuccess (200) {ArrayOfObject}    response.picture             Mandatory Array of Objects.
 * @apiSuccess (200) {String}           response.picture.URL         Picture URL.
 * @apiSuccess (200) {String}           response.picture.language    development language.
 * @apiSuccess (200) {String}           response.picture.framework   development framework.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : [{
      	         type               : 'Admin',
      	         picture            : [{
      	            URL         : 'http://.....',
      	            language    : 'JavaScript'/
      	            framework   : 'Angular'
      	        }]
            }],
            error : null
*     }
 *
 * @apiError (400) {Boolean} status     False if error occurred.
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

    repository.getData(models.PortfolioModel,{},false, null)
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
 * @api {get} /portfolio/:id  Get Portfolio
 * @apiDescription Get a specific Portfolio by Id.
 * @apiName GePortfolioById
 * @apiGroup Portfolio
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean}          status                       True if returning data.
 * @apiSuccess (200) {Object}           response                     Objects of key value pair
 * @apiSuccess (200) {String}           response.type                Admin | Iframe | Login | Site.
 * @apiSuccess (200) {ArrayOfObject}    response.picture             Array of Objects.
 * @apiSuccess (200) {String}           response.picture.URL         Picture URL.
 * @apiSuccess (200) {String}           response.picture.language    development language.
 * @apiSuccess (200) {String}           response.picture.framework   development framework.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : {
      	         type               : 'Admin',
      	         picture            : [{
      	            URL         : 'http://.....',
      	            language    : 'JavaScript'/
      	            framework   : 'Angular'
      	        }]
            },
            error : null
*     }
 *
 * @apiError (400) {Boolean} status     False if error occurred.
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

function getByID(req, res){

    if(req.params && req.params.id){

        var body  = req.params;
        var query = {
            _id : body.id
        };
        repository.getData(models.PortfolioModel,query,true)
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
 * @api {put} /portfolio/:id  Update Portfolio
 * @apiDescription Update a specific Portfolio by Id.
 * @apiName UpdatePortfolio
 * @apiGroup Portfolio
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {Object}           picture             Objects of Key value pair.(Optional)
 * @apiParam {String}           picture.URL         Picture URL. (Optional)
 * @apiParam {String}           picture.language    development language. (Optional)
 * @apiParam {String}           picture.framework   development framework. (Optional)
 *
 * @apiSuccess (200) {Boolean} status     True if update successfully.
 * @apiSuccess (200) {Object}  response   True if update successfully.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Updated
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

function updateByID(req, res){
    if(req.params && req.params.id){

        var body  = {
            $push : {
                picture : req.body
            }
        };
        console.log('/ Update ------------------');
        console.log(body);

        var query = {
            _id : req.params.id
        };
        repository.updateData(models.PortfolioModel,query,body)
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
 * @api {delete} /portfolio/:id  Delete Portfolio
 * @apiDescription Delete a specific Portfolio by Id.
 * @apiName DeletePortfolio
 * @apiGroup Portfolio
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean} status     True if delete successfully.
 * @apiSuccess (200) {Object}  response   True if delete successfully.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Deleted
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
        repository.updateData(models.PortfolioModel,query,{isDeleted: true})
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
