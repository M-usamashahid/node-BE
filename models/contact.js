"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name            : { type: String },
    email           : { type: String },
    message         : { type: String },
    isDeleted       : { type: Boolean, default: false }
}, { timestamps: true });


exports.ContactModel = function () {
    return mongoose.model('contact', ContactSchema);
};
