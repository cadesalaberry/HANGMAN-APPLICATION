// ROUTES TODOS
var Todo = require('../models/pendu.js');
module.exports 	= function(app) {
	app.get('/pendu', Todo.findAll);
	app.post('/pendu', Todo.create);
	app.put('/pendu/:id', Todo.update);
	app.delete('/pendu/:id', Todo.delete);
    
}
