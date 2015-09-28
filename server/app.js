/**
 * Created by briandaves on 9/26/15.
 */
var express = require('express');
var students = require('./public/assets/data/students');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(require,response){
    console.log('hit empty route');
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/assets/CSS/stylesheet.css')
});

app.get('/getStudents',function(require,response){
    console.log('hit get data route');
    response.send(students);
});


var server = app.listen(process.env.port, function(){
    var port = server.address().port;
    console.log('listening on port:',port);
});

module.exports = app;

