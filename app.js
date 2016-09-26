var express = require('express');
var path = require('path')

var app = express();

app.use(express.static('./index.html'));
app.use(express.static('./browser'))

app.get('/', function(req,res,next){
	res.sendFile(path.join( __dirname , './browser/index.html'))
})

app.listen(4000, function(){
	console.log("Pete Pie is up on 4000");
})