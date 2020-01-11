function routes(app) {
   
    app.get('/', (req, res) => res.send('hola\n'))
   
}

module.exports = routes