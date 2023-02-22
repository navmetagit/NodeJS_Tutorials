var http = require('http');
const { json } = require('stream/consumers');
var url = require('url');

var dateMy = require('./dateFn')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    var q = url.parse(req.url , true).query;
    var txt = q.year+" - "+q.month;
    res.end(txt);
    
    // res.write(req.url);
    // res.end('Hello nav !'+dateMy.myDate());
}).listen(8080);