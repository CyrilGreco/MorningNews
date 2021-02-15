//  Dans ce fichier, importez le module mongoose
var mongoose = require('mongoose');

// initialisation des variables d'environnement pour crypter les données sensibles.

var options = {
	connectTimeoutMS: 5000,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// mongodb+srv://cyril:<password>@cluster0.rp0c6.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
	'mongodb+srv://cyril:Azteque69@cluster0.ff1fv.mongodb.net/morningnews?retryWrites=true&w=majority',
	options,
	function (err) {
		console.log(err);
	}
);

module.exports = mongoose;
