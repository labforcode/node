let app = require('./config/server');

let rotaHome = require('./app/routes/home/home');
rotaHome(app);

let rotaContato = require('./app/routes/contato/contato');
rotaContato(app);

let rotaProdutos = require('./app/routes/produtos/produtos');
rotaProdutos(app);

let rotaTecnologia = require('./app/routes/tecnologia/tecnologia');
rotaTecnologia(app);

app.listen(3000, () => {
    console.log('Servidor ON !');
});
