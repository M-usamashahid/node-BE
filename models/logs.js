"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LogSchema = new Schema({
    action          : { type: String },
    userId          : { type: Schema.ObjectId, ref: 'user' },
    isDeleted       : { type: Boolean, default: false }
}, { timestamps: true });


exports.LogModel = function () {
    return mongoose.model('log', LogSchema);
};
