const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    avatar: { type: String, default: 'https://semantic-ui.com/images/avatar/large/elliot.jpg' }
}, { timestamps: true });

var Users = mongoose.model('Users', UserSchema);

module.exports = Users;