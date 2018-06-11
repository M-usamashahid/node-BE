"use strict";

var repository              = require('../repository/index');
var fs                      = require('fs');
var response                = require('./index');


/**
 * @api {post} /image  Upload Image
 * @apiDescription Upload a new Image.
 * @apiName UploadImage
 * @apiGroup Image
 * @apiVersion 1.0.0
 *
 * @apiHeader {String}  access_token      User unique access key.
 *
 * @apiParam {String} image    Mandatory Base64 String.
 * @apiParam {String} format   image format eg..png .jpg.
 * @apiParam {String} name     image file name.
 *
 * @apiSuccess (200) {Boolean} status     True if returning data.
 * @apiSuccess (200) {Object} response    key value pairs of data
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Created
 *     {
*       	status : true,
*       	response : {
      	       image_url : 'http://....'
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

function imageUpload(req, res){
    var format = req.body.format;

    req.body.image = req.body.image.replace(/^data:image\/jpeg+;base64,/, "");
    req.body.image = req.body.image.replace(/^data:image\/png+;base64,/, "");
    req.body.image = req.body.image.replace(/ /g, '+');

    var date = Date.now();
    fs.writeFile('./static/'+  (req.body.name ? req.body.name : date) +'.'+format, req.body.image, 'base64', function(err) {
        console.log(err);
    });
    var responseURL = {
        "image_url": 'http://' + req.headers.host + '/' + (req.body.name ? req.body.name : date) +'.'+format
    };
    console.log('Image Response ----- : ',responseURL)
    response.send(200,{"status":true, "response":responseURL, "error":null },res);
}

exports.imageUpload            = imageUpload;
