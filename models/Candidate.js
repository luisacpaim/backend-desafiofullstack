
const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nomeCompleto: { type: String, unique: false, required: true },
    dataNascimento: { type: String, unique: false, required: true },
    estCivil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    rua: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    profissao: { type: String, unique: false, required: true },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);