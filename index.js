const express = require('express');
const app = express();
const port = 8080;

//View Engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));

//Conexão
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Rotas
app.get('/', (req, res) => {
    res.render('index');
});