var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// const client = new MongoClient(url)
// await client.connect();


// async function main(){
  
//     const client = new MongoClient(url);
 
//     try {
//         // Connect to the MongoDB cluster
//        let db =  await client.connect();
//        console.log('my db: '+db.db);
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
//             var myobj = {name:"Company Inc" , address:"Highway 37"};
//         // await insertDatabase(client,myobj)
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function insertDatabase(data){
    
//     // databasesList = await client.db().admin().listDatabases();
//     // databasesList.databases.testing
// }
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);


    //  MongoClient.connect(url, async function(err,db){
    //     if(err) throw err;
    //     var dbo =   db.db('mydb');
    //     var myobj = {name:"Company Inc" , address:"Highway 37"};
    
    //     dbo.collection("customers").insert(myobj,function(err,res){
    //         if(err) throw err;
    //         console.log('1 document inserted!');
    //         db.close();
    //     });
    // });


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;
console.log('done working'+db);
     //Write databse Insert/Update/Query code here..
                
});
