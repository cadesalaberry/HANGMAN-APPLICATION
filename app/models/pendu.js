// MODEL TODO
var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
  description: String
});
var Pendu = {
    
    model: mongoose.model('Pendu', todoSchema),
    
    create: function(req, res) {
		Pendu.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Pendu.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Pendu.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Pendu.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Pendu;
