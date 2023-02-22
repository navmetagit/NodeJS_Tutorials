var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url);

    const pathName = req.url.toLowerCase();

    if(pathName== '/' || pathName== '/overview'){
        res.end('This is the OVERVIEW!!');
    }
    else if(pathName=='/product'){
        
        res.end('This is the PRODUCT!!');
    }
    else if(pathName=='/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`,(err,data)=>{
           if(err){
            console.log('error is '+err);
            return
           }
           const productData =JSON.parse(data)
            console.log(__dirname);
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(data);
        })
    }
    else{
        res.writeHead(404,{
            'Content-Type': 'text/html',
            'my-own-header':'Hello-world'
        });
        res.end("<h1>Page not found!</h1>");

    }

});

server.listen(8080, '127.0.0.1',()=>{
    console.log('server is listening!!');
}); //port and hostname