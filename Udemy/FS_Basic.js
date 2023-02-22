// blocking synchronous way
var fs = require("fs");

var textIn = fs.readFileSync('./txt/testingInput.txt', 'utf8');
console.log('input data is '+textIn);

var textOutput=`${textIn} - I , Navpreet Singh Modified Data on ${new Date()}`;
fs.writeFileSync('./txt/testingOutput.txt',textOutput);
console.log('successfully written');

// asynchronous non blocking way
 fs.readFile('./txt/nextTest.txt', (err, data1) => {
    if (err) {
        console.log('error is  '+ err);
        return;
    }
     fs.readFile(`./txt/${data1}.txt`,(err2,data2)=>{
        if (err2) {
            console.log('error2 is  '+ err2);
            return;
        }
        fs.readFile('./txt/append.txt',(err3,data3)=>{
            if (err3) {
                console.log('error2 is  '+ err3);
                return;
            }
        
        fs.writeFile('./txt/combined.txt',data2+data3,err=>{
            console.log('successfulyy written..');
        })
        })
        console.log('data is '+ data2);
    })
})
console.log('doneee');

