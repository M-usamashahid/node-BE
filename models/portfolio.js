"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
    type            : { type: String }, // Admin | Iframe | Login | Site
    picture         : [{
        URL             : { type: String },
        language        : { type: String },
        framework       : { type: String }
    }],
    isDeleted       : { type: Boolean, default: false }
}, { timestamps: true });


exports.PortfolioModel = function () {
    return mongoose.model('portfolio', PortfolioSchema);
};
