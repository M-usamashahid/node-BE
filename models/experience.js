"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var ExperienceSchema = new Schema({
    title               : { type: String },
    company             : { type: String },
    description         : { type: String },
    Url                 : { type: String },
    iconUrl             : { type: String, default: null },
    type                : { type: String }, // job | freelance
    startDate           : { type: Date },
    endDate             : { type: Date },
    isDeleted           : { type: Boolean, default: false }
}, { timestamps: true });


exports.ExperienceModel = function () {
    return mongoose.model('experience', ExperienceSchema);
};
