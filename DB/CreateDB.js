var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testit";
console.log('print data');
// if the db don't exists ,it creates it.
MongoClient.connect(url, function(err,db){
    console.log('started Database created!');
    if(err) throw err;
    console.log('Database created!');
    db.close();
});

// unsuccessful
