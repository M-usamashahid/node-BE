"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var constants               = require('../repository/constants');
var response                = require('./index');


/**
 * @api {post} /experience  Create Experience
 * @apiDescription Create a new Experience.
 * @apiName CreateExperience
 * @apiGroup Experience
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   title               Mandatory title/designation.
 * @apiParam {String}   company             Mandatory company name.
 * @apiParam {String}   description         job description.
 * @apiParam {String}   type                Mandatory job type (work or freelance).
 * @apiParam {String}   Url                 company web or project Url.
 * @apiParam {String}   iconUrl             logo or Icon Url.
 * @apiParam {Date}     startDate           job starting date.
 * @apiParam {Date}     endDate             job ending date.
 *
 * @apiSuccess (200) {Boolean} status     True if returning data.
 * @apiSuccess (200) {Object} response    key value pairs of data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	        title               : 'SR. Developer',
      	        company             : 'ABC Company',
                type                : 'work',
                iconUrl             : 'http://.....'
                ....
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
    if(!body.title || !body.company || !body.type || !body.startDate){
        response.send(400,{
            "status":false,
            "response":null,
            "error":constants.fields_missing
        },res);
        return;
    }

    var obj = {
        title            : body.title,
        company          : body.company,
        description      : body.description,
        Url              : body.Url,
        type             : body.type,
        startDate        : body.startDate,
        endDate          : body.endDate,
        iconUrl          : body.iconUrl
    };

    repository.saveData(models.ExperienceModel,obj)
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
 * @api {get} /experience  Get all Experience
 * @apiDescription Get all Experiences.
 * @apiName GetExperiences
 * @apiGroup Experience
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Boolean}  status                     True if returning data.
 * @apiSuccess (200) {Array}    response                   Objects of array
 * @apiSuccess (200) {String}   response.title             title/designation.
 * @apiSuccess (200) {String}   response.company           Company name.
 * @apiSuccess (200) {String}   response.description       Job description.
 * @apiSuccess (200) {String}   response.type              job type (work or freelance).
 * @apiSuccess (200) {String}   response.iconUrl           Logo or Icon URL.
 * @apiSuccess (200) {String}   response.Url               company web or project Url.
 * @apiSuccess (200) {String}   response.startDate         Job start date.
 * @apiSuccess (200) {String}   response.endDate           Job end date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : [{
      	        title               : 'SR. Developer',
      	        company             : 'ABC Company',
                type                : 'work',
                iconUrl             : 'http://.....'
                ....
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

    repository.getData(models.ExperienceModel,{},false, null)
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
 * @api {get} /experience/:id  Get Experience
 * @apiDescription Get a specific Experience by Id.
 * @apiName GetExperienceById
 * @apiGroup Experience
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean}  status                     True if returning data.
 * @apiSuccess (200) {Object}   response                   Object of key value pair
 * @apiSuccess (200) {String}   response.title             title/designation.
 * @apiSuccess (200) {String}   response.company           Company name.
 * @apiSuccess (200) {String}   response.description       Job description.
 * @apiSuccess (200) {String}   response.type              job type (work or freelance).
 * @apiSuccess (200) {String}   response.iconUrl           Logo or Icon URL.
 * @apiSuccess (200) {String}   response.Url               company web or project Url.
 * @apiSuccess (200) {String}   response.startDate         Job start date.
 * @apiSuccess (200) {String}   response.endDate           Job end date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : {
      	        title               : 'SR. Developer',
      	        company             : 'ABC Company',
                type                : 'work',
                iconUrl             : 'http://.....'
                ....
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
        repository.getData(models.ExperienceModel,query,true)
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
 * @api {put} /experience/:id  Update Experience
 * @apiDescription Update a specific Experience by Id.
 * @apiName UpdateExperience
 * @apiGroup Experience
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   title             Mandatory title/designation. (Optional)
 * @apiParam {String}   company           Mandatory company name. (Optional)
 * @apiParam {String}   description       job description. (Optional)
 * @apiParam {String}   type              Mandatory job type (work or freelance). (Optional)
 * @apiParam {String}   Url               company web or project Url. (Optional)
 * @apiParam {String}   iconUrl           logo or Icon Url. (Optional)
 * @apiParam {Date}     startDate         job starting date. (Optional)
 * @apiParam {Date}     endDate           job ending date. (Optional)
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

        var body  = {$set : req.body};
        console.log('/ Update ------------------');
        console.log(body);

        var query = {
            _id : req.params.id
        };
        repository.updateData(models.ExperienceModel,query,body)
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
 * @api {delete} /experience/:id  Delete Experience
 * @apiDescription Delete a specific Experience by Id.
 * @apiName DeleteExperience
 * @apiGroup Experience
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
        repository.updateData(models.ExperienceModel,query,{isDeleted: true})
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
