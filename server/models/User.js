const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    avatar: String
}, { timestamps: true });

var Users = mongoose.model('Users', UserSchema);

module.exports = Users;