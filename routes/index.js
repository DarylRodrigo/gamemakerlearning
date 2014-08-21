exports.index = function(req, res){
	res.send(200);
}

exports.tutorial = function(req, res){
	res.render('tutorial');
}

exports.tutorial1 = function(req, res){
	res.render('tutorial1');
}