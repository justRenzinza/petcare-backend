const Cliente = require('../models/Cliente.js');

module.exports = {
    cadastrarCliente: async (req, res) => {
        try {
            const dados = req.body;
            console.log(dados);
            const cliente = await Cliente.criarCliente(dados);
            console.log(cliente);

            return res.status(201).json(cliente);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, senha } = req.body;
            console.log(email, senha)
            const cliente = await Cliente.autenticar(email, senha);

            if (cliente) {
                return res.status(200).json(cliente);
            } else {
                return res.status(401).json({ message: 'Email ou senha inválidos' });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};