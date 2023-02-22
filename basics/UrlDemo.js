var url = require('url');
var addr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(addr,true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(JSON.stringify(qdata)); //returns json
console.log(qdata.month); //returns 'february'

