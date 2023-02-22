var fs = require('fs');//for file system
var http = require('http');//for http server

// for reading file
//#region 
http.createServer(function(req,res){
    fs.readFile('demofile.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);
//#endregion

// for appending file
//#region 
fs.appendFile('myFile.txt','Its already created! ',function(err){
    if(err) throw err;
    console.log('saved success!');
})
//#endregion

// for opening file
// if w is mentioned then it file opened for writing
// if file doesnt exists it create and if exists emptied the file
//#region 
fs.open('myfile2.txt','w',function(err,file){
    if(err) throw err;
    console.log('saved successfully');
})
//#endregion

// writefile
// create one , if not exists and replaces if already exists.
//#region 
fs.writeFile('myFile.txt','Hello Nav.',function(err){
    if(err) throw err;
    console.log('successfully wrote file!');
})
//#endregion

// append file
//#region 
fs.appendFile('myFile.txt','this is my text!!',function (err){
    if(err) throw err;
    console.log('updated file!');
})
//#endregion

// to delete a file
//#region 
fs.unlink('myFile.txt',function(err){
    if(err){
        console.log('eroor is ',err);
        return
    }
    console.log('file deleted successfully');
})
//#endregion

// Rename the file
fs.rename('myFile.txt','myFileNew.txt',function(err){
    if(err) throw err;
    console.log('file renamed');
})
