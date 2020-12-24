const http = require("http");
let url = require("url");
http.createServer( (request, response) => {
    let urlRequest = url.parse(request.url, true);
    console.log(urlRequest);
    response.end("eeend");
}).listen(3000);
// http.createServer(accept).listen(5501);
// function accept(request, response) {
//     if (request.method == "GET") {
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         // let now = new Date();
//         // response.write("Your vote is excepted: " + now);
//         response.write("Hi!");
//     }
    
// }

// function accept (request, response) {
    
// }
console.log("Server is running at http://127.0.0.1:3000/");

//  task2

const http = require("http");
let url = require("url");
let static = require("node-static");
let file = new static.Server('.');
http.createServer(accept).listen(5501);

function accept (request, response) {
    if (request.url == "/books.json") {
        file.serve(request, response);
    } 
}; 
console.log("Server is running at http://127.0.0.1:5501/");