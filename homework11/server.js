// //  task1
// const http = require("http");
// http.createServer( function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     const os = require("os");
//     const user = os.userInfo().username;
//     const osType = os.type(); 
//     const time = os.uptime();
//     const path = require("path");
//     const file = path.basename(__filename);
//     const directory = path.dirname(__filename);
//     response.write("<h1>System information</h1>");
//     response.write("<p>Current user name: "+user+"</p>");
//     response.write("<p>OS type: "+osType+"</p>");
//     response.write("<p>System work time: "+time/60+" minutes</p>");
//     response.write("<p>Current work directory: "+directory+"</p>");
//     response.write("<p>Server file name: "+file+"</p>");
// }).listen(5000);
 
// console.log('Server running at http://127.0.0.1:5000/');


//  task2
const http = require("http");
http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const os = require("os");
    const user = os.userInfo();
    const personalmodule = require("./personalmodule");
    response.write("<p>" + personalmodule.getDate() + "</p>")
    response.write("<p>" + personalmodule.greeting(user) + "</p>");
    
}).listen(5000);
 
console.log('Server running at http://127.0.0.1:5000/');