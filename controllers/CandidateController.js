
const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nomeCompleto, dataNascimento, estCivil, genero, cep, rua, numero, bairro, cidade, uf, celular, email, profissao, identidade, cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nomeCompleto = nomeCompleto;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estCivil = estCivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.profissao = profissao;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Algum erro ocorreu.');
            }

            return res.status(200).send(savedCandidate);
        });
    },

};
