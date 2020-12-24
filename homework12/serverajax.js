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
