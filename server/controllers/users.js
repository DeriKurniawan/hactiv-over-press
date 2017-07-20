const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var models = {};

models.getAll = function (req, res) {
    User.find()
    .exec( (err, resposne) => {
        if(err) res.send({ message: 'Kesalahan tidak dapat memuat data user', error: err });
        res.send(result);
    })
}

models.signup = function (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.findOne({
        username: req.body.username
    })
    .exec( (err, data) => {
        if(err) res.send({ message: 'Kesalahan tidak dapat memuat data user', error: err })
        if(data) {
            res.send({ message: 'Usename sudah ada, silahkan masukkan yang lain!' })
        } else {
            User.create(req.body, (err, result) => {
                if(err) res.send({ message: 'Kesalahan tidak dapat membuat baru data user', error: err });
                res.send(result);
            })
        }
    })
}

models.signin = function (req, res) {
    User.findOne({
        username: req.body.username
    })
    .exec( (err, data) => {
        if(err) res.send({ message: 'Kesalahan tidak dapat memuat data user', error: err })
        if (data) {
            if(!bcrypt.compareSync(password, data.password)){
                 res.send({ message: 'Password yang anda masukkan salah' });
            } else {
                var token = jwt.sign({
                        _id: data._id,
                        fullname: data.fullname,
                        email: data.email,
                        address: data.address
                    }, process.env.RAHASIA, { expiresIn: '1d' });
                res.send({
                    message: 'Anda berhasil masuk!',
                    id: data._id,
                    token: token,
                })
            }
        }
    })
}

module.exports = models;