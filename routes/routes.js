const router = require('express').Router();

const { cadastrarCliente, login } = require("../controllers/cliente.js");
const { cadastrarPet, listarPets } = require("../controllers/pet.js");
const { agendarConsulta, listarAgendamentos } = require("../controllers/agendamento.js");
const { listarClinicas } = require("../controllers/clinica.js");

// Cliente
router.post('/cadastro', cadastrarCliente);
router.post('/login', login);

// Pet
router.post('/cadastrar-pet', cadastrarPet);
router.get('/listar-pets', listarPets);

// Clinica
router.get('/listar-clinicas', listarClinicas);

// Agendamento
router.post('/agendar-consulta', agendarConsulta);
router.post('/listar-consultas', listarAgendamentos);

module.exports = router;