exports.index = function(req, res){
	res.redirect('/tutorial');
}

exports.tutorial = function(req, res){
	res.render('tutorial');
}

exports.tutorial1 = function(req, res){
	res.render('tutorial1');
}

exports.tutorial2 = function(req, res){
	res.render('tutorial2');
}

exports.tutorial3 = function(req, res){
	res.render('tutorial3');
}