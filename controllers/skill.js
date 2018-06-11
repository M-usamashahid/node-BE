"use strict";

var repository              = require('../repository/index');
var models                  = require('../models/index').allModels;
var constants               = require('../repository/constants');
var response                = require('./index');


/**
 * @api {post} /skill  Create Skill
 * @apiDescription Create a new Skill.
 * @apiName CreateSkill
 * @apiGroup Skill
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   name              Mandatory Skill Name.
 * @apiParam {String}   value             Mandatory Skill value.
 * @apiParam {String}   description       Skill description.
 * @apiParam {String}   type              Mandatory skill type (main or extra).
 * @apiParam {String}   iconUrl           Skill Icon URL.
 *
 * @apiSuccess (200) {Boolean} status     True if returning data.
 * @apiSuccess (200) {Object} response    key value pairs of data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	        name                : 'Javascript',
      	        value               : '8',
                type                : 'main',
                iconUrl             : 'http://.....'
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
    if(!body.name || !body.value || !body.type){
        response.send(400,{
            "status":false,
            "response":null,
            "error":constants.fields_missing
        },res);
        return;
    }

    var obj = {
        name             : body.name,
        value            : body.value,
        description      : body.description,
        type             : body.type,
        iconUrl          : body.iconUrl
    };

    repository.saveData(models.SkillModel,obj)
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
 * @api {get} /skill  Get all Skills
 * @apiDescription Get all Skills.
 * @apiName GetSkills
 * @apiGroup Skill
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Boolean}  status                     True if returning data.
 * @apiSuccess (200) {Array}    response                   Objects of array
 * @apiSuccess (200) {String}   response.name              Skill Name.
 * @apiSuccess (200) {String}   response.value             Skill value.
 * @apiSuccess (200) {String}   response.description       Skill description.
 * @apiSuccess (200) {String}   response.type              Skill type (main or extra).
 * @apiSuccess (200) {String}   response.iconUrl           Skill Icon URL.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : [{
      	        name                : 'Javascript',
      	        value               : '8',
                type                : 'main',
                iconUrl             : 'http://.....'
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

    repository.getData(models.SkillModel,{},false, null)
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
 * @api {get} /skill/:id  Get Skill
 * @apiDescription Get a specific Skill by Id.
 * @apiName GetSkillById
 * @apiGroup Skill
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiSuccess (200) {Boolean}  status                     True if returning data.
 * @apiSuccess (200) {Object}   response                   Objects of key value pair
 * @apiSuccess (200) {String}   response.name              Skill Name.
 * @apiSuccess (200) {String}   response.value             Skill value.
 * @apiSuccess (200) {String}   response.description       Skill description.
 * @apiSuccess (200) {String}   response.type              Skill type (main or extra).
 * @apiSuccess (200) {String}   response.iconUrl           Skill Icon URL.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Get
 *     {
*       	status : true,
*       	response : {
      	        name                : 'Javascript',
      	        value               : '8',
                type                : 'main',
                iconUrl             : 'http://.....'
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
        repository.getData(models.SkillModel,query,true)
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
 * @api {put} /skill/:id  Update Skill
 * @apiDescription Update a specific Skill by Id.
 * @apiName UpdateSkill
 * @apiGroup Skill
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String}   name              Skill Name. (Optional)
 * @apiParam {String}   value             Skill value. (Optional)
 * @apiParam {String}   description       Skill description. (Optional)
 * @apiParam {String}   type              skill type (main or extra). (Optional)
 * @apiParam {String}   iconUrl           Skill Icon URL. (Optional)
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
        repository.updateData(models.SkillModel,query,body)
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
 * @api {delete} /skill/:id  Delete Skill
 * @apiDescription Delete a specific Skill by Id.
 * @apiName DeleteSkill
 * @apiGroup Skill
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
        repository.updateData(models.SkillModel,query,{isDeleted: true})
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
