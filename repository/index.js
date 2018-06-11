"use strict";

var q                       = require("q");
var constants               = require('constants');
var logger                  = require('../config/log');


function getData (model, query, isSingle, selectParams, populateParams, sortParams, limit, selectPopulate,isDeleted){
    var deferred = q.defer();
    if(!isDeleted){
        query.isDeleted = false;
    }

    if(isSingle){
        model.findOne(query)
            .select(selectParams || "")
            .populate(populateParams || "", selectPopulate || "")
            .exec(function(error, data){
                if(error){
                    console.log("Error in getting Data");
                    console.log(error);
                    logger.error('index.js getData line # 19 ---- ',model,query,error);
                    deferred.reject(error);
                }
                else {
                   // console.log("Success in Find!");
                    deferred.resolve(data);
                }
            });
    }else{
        model.find(query)
            .select(selectParams || "")
            .populate(populateParams || "", selectPopulate || "")
            .sort(sortParams || "")
            .limit(limit)
            .exec(function(error, data){
                if(error){
                    console.log("Error in getting Data");
                    console.log(error);
                    logger.error('index.js getData line # 37 ---- ',model,query,error);
                    deferred.reject(error);
                }
                else {
                   // console.log("Success in Find!");
                    deferred.resolve(data);
                }
            });
    }
    return deferred.promise;
}

function saveData (model, saveObj){
    var defer = q.defer();

    var obj = new model(saveObj);
    obj.save(function(error, doc){
        if(error)
        {
            console.log("Error");
            console.log(error);
            logger.error('index.js saveData line # 58 ---- ',model,saveObj,error);
            defer.reject(error);
        }
        else
        {
            defer.resolve(doc);
        }
    });
    return defer.promise;
}

function bulkInsert (model, saveArray){
    var defer = q.defer();

    model.collection.insert(saveArray,function(error, doc){
        if(error)
        {
            console.log("Error");
            console.log(error);
            logger.error('index.js saveData line # 58 ---- ',model,saveArray,error);
            defer.reject(error);
        }
        else
        {
            defer.resolve(doc);
        }
    });
    return defer.promise;
}

function updateData (model, query, updateData){
    var defer = q.defer();

    model.update(query, updateData, function(error, doc){
        if(error)
        {
            console.log("Error");
            console.log(error);
            logger.error('index.js updateData line # 96 ---- ',model,query,updateData,error);
            defer.reject({status:false, message:error});
        }
        else
        {
            defer.resolve({status:true,data : doc , message:"Successfully Update"});
        }
    });
    return defer.promise;
}


function removeData (model, query){
    var defer = q.defer();

    model.remove(query, function(error, doc){
        if(error)
        {
            console.log("Error");
            console.log(error);
            logger.error('index.js removeData line # 116 ---- ',model,query,error);
            defer.reject({status:false, message:error});
        }
        else
        {
            defer.resolve({status:true,data : doc , message:"Successfully Deleted"});
        }
    });
    return defer.promise;
}

function registerUser (model,saveObj){
    var defer = q.defer();

    var obj = new model(saveObj);
    if(saveObj.password){

        obj.password = obj.generateHash(saveObj.password);
    }
    obj.save(function(error, doc){
        if(error)
        {
            console.log("Error");
            console.log(error);
            logger.error('index.js registerUser line # 120 ---- ',model,saveObj,error);
            defer.reject(error);
        }
        else
        {
            defer.resolve(doc);
        }
    });
    return defer.promise;
}





exports.getData                 = getData;
exports.saveData                = saveData;
exports.bulkInsert              = bulkInsert;
exports.updateData              = updateData;
exports.removeData              = removeData;
exports.registerUser            = registerUser;