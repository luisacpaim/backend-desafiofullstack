const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register, (req,resp) => {
    
    resp.send('Usuário cadastrado com sucesso.');
});

routes.get('/', (req, res) => {
    res.send('iti malia');
});

routes.get('/cadastro', alert('Usuário cadastrado com sucesso.'));


module.exports = routes;