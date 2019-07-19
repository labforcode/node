let http = require('http');

let server = http.createServer( (req, res) => {
    res.end("<html><body>Este é o meu primeiro servidor NodeJS !</body></html>");
});


server.listen(3000);
