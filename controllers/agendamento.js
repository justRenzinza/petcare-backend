const Agendamento = require('../models/Agendamento.js');

module.exports = {
    agendarConsulta: async (req, res) => {
        try {
            const dados = req.body;
            const agendamento = await Agendamento.criarAgendamento(dados);
            
            return res.status(201).json(agendamento);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    listarAgendamentos: async (req, res) => {
        try {
            const agendamentos = await Agendamento.getAgendamentos();

            return res.status(200).json(agendamentos);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};