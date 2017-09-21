var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('front'));
app.use(bodyParser.json());
app.listen(3000);

//
app.get("/api/users", function(req, res){
	res.send("**************:");
});
