"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    firstName           : { type: String },
    lastName            : { type: String },
    email               : { type: String, unique: true, index: true  },
    password            : { type: String },
    avatar_url          : { type: String, default: null },
    url                 : { type: String },
    skypeId             : { type: String },
    socialNetworkURL    : { type: String },
    description         : { type: String },
    address             : { type: String },
    isAdmin             : { type: Boolean },
    isDeleted           : { type: Boolean, default: false }
}, { timestamps: true });


// methods ======================
// generating a hash
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

exports.UserModel = function () {
    return mongoose.model('user', UserSchema);
};
