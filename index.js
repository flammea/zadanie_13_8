var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
	fs.readFile('./index.html',  function(err, data) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write(data);
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<img src="https://fthmb.tqn.com/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg">');
            response.end();
        }
    });
});

server.listen(9000);