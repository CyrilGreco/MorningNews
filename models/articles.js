var mongoose = require('mongoose');
// Mettre en place le schéma de votre collection au sein de votre Backend.

var articleschema = mongoose.Schema({
	author: String,
	title: String,
	description: String,
	content: String,
	urlToImage: String,
	url: String,
});

// schema pour créer un doc, collection est un ensemble de doc,
// création d'un model qui va gérer articleschema, avec le nom de la collection ('article') et du schema.

var articleModel = mongoose.model('articles', articleschema);

module.exports = articleModel;
