let http = require('http');

let server = http.createServer( (req, res) => {

    let categoria = req.url;
    console.log(categoria);
    switch (categoria) {
        case '/sobre':
                res.end('<html><body>Página Sobre</body></html>');
            break;
        case '/contato':
            res.end('<html><body>Página Contato</body></html>');
            break;
        case '/produtos':
            res.end('<html><body>Página Produtos</body></html>');
            break;   
        default:
            res.end('<html><body>Página Inicial</body></html>');
            break;
    }
});

server.listen(3000);