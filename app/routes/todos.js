// ROUTES TODOS
var Todo = require('../models/pendu.js');
var randomWordFR = require('random-word-fr');
module.exports 	= function(app) {
	app.get('/pendu', Todo.findAll);
	app.post('/pendu', Todo.create);
	app.put('/pendu/:id', Todo.update);
	app.delete('/pendu/:id', Todo.delete);
  app.get('/random', function(req,res){
		res.send(randomWordFR());
	})
}
