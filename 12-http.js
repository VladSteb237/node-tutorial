
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        return;
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We cant't to find...</p>
    <a href='/'>Back to Home</a>
    `)
})
server.listen(5005);