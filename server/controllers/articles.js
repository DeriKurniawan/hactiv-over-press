const Article = require('../models/Article');
var models = {}

models.getOne = function (req, res) {
    Article.find()
    .populate('author')
    .exec( (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat memuat article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.get = function (req, res) {
    let id = req.params.id
    Article.findById(id)
    .populate('author')
    .exec( (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat memuat article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.getByCategory = function (req, res) {
    let category = req.body.category
    Article.find({
        category: new RegExp (category, "i")
    })
    .exec( (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat memuat article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.create = function (req, res) {
    Article.create(req.body, (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat membuat article baru',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.getByAuthor = function (req, res) {
    Article.find({
        author: req.params.id
    })
    .exec( (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat memuat article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.update = function (req, res) {
    Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .exec( (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat merubah article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

models.remmove = function (req, res) {
    Article.findByIdAndRemove(req.params.id, (err, result) => {
        if(err) {
            res.send({
                message: 'Kesalahan, tidak dapat menghapus article',
                error: err
            })
        } else {
            res.send(result)
        }
    })
}

module.exports = models