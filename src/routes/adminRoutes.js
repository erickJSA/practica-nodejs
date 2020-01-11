function routes(app) {
   
    app.get('/', (req, res) => res.send('<h1>Hola Mundo!!!!!!</> \n'))
   
}

module.exports = routes