// Create a web server
// This server listens for requests on port 3000. When a request is received, 
// the server should return the contents of the comments.json file.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not found');
            return;
        }
        res.end(data);
    });
});

server.listen(3000);



