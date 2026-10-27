import http from 'node:http';
import fs from 'node:fs';

const port = process.env.PORT || 8080;

// Create a local server to receive data from
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    if (request.url == "/") {
        response.statusCode = 200;
        const index = fs.readFileSync('./index.html');
        response.write(index);
    }
    else if (request.url == "/about") {
        response.statusCode = 200;
        const about = fs.readFileSync('./about.html');
        response.write(about);
    }
    else if (request.url == "/contact-me") {
        response.statusCode = 200;
        const contact_me = fs.readFileSync('./contact-me.html');
        response.write(contact_me);
    }
    else {
        response.statusCode = 404;
        const err404 = fs.readFileSync('./404.html');
        response.write(err404);
    }
    console.log(response.statusCode);
    response.end();
});

server.listen(port, () => {
    console.log(port);
});
