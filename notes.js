var express = require('express');
var app = express();
var fs = require('fs');
const  db = require('./queries.js');




var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 





//paths
app.get('/listNotes',db.getNotes);
app.post('/postNote',db.postNote);
app.delete('/deleteNote',db.deleteNote);
app.post('/updateNote',db.updateNote);
app.get('/fetchNote',db.fetchNote);



var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Notes app listening at http://%s:%s", host, port);
})
