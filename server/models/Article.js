const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: { type: Schema.Types.ObjectId, ref: 'Users' }
}, { timestamps: true })

var Articles = mongoose.model('Articles', ArticleSchema);

module.exports = Articles;