var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new  Schema({
    title:String,
    imagem: String,
    categoria: String,
    conteudo: String,
    slug:String,
    autor: String,
    views: Number,

},{collection: 'post'});

var Post  = mongoose.model("post", postSchema);

module.exports = Post;