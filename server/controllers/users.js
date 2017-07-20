const User = require('../models/User');
var models = {};

models.getAll = function (req, res) {
    User.find()
    .exec( (err, resposne) => {
        if(err) res.send({ message: 'Kesalahan tidak dapat memuat data', error: err });
        res.send(result);
    })
}

models.signup = function (req, res) {
    User.create(req.body, (err, result) => {
        
    })
}

module.exports = models;