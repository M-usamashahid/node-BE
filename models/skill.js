"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    name            : { type: String },
    value           : { type: String },
    description     : { type: String },
    type            : { type: String }, // main | extra
    iconUrl         : { type: String, default: null },
    isDeleted       : { type: Boolean, default: false }
}, { timestamps: true });


exports.SkillModel = function () {
    return mongoose.model('skill', SkillSchema);
};
