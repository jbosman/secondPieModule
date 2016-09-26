var express = require('express');
var path = require('path')

var app = express();

app.use(express.static('./index.html'));
app.use(express.static('./browser'))
app.use(express.static('./node_modules'))

app.get('/', function(req,res,next){
	res.sendFile(path.join( __dirname , './browser/index.html'))
})

app.get('/message', function(req,res,next){
	console.log("You clicked on Pete!! Ouch!!")
	res.status(200).send();
})

app.listen(4000, function(){
	console.log("Pete Pie is up on 4000");
})