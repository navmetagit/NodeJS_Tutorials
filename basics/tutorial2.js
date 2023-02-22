var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req,res){

    if(req.url=='/html'){

        fs.readFile('demofile.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        var q = url.parse(req.url,true).query;
        return res.end(JSON.stringify(q))
        // res.write('hi nav')
        // let val = [{a:'nav',ok:'done'}]
        // return res.end(JSON.stringify(val));
    }

}).listen(8080);

