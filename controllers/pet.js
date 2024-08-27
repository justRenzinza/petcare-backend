const Pet = require('../models/Pet.js');

module.exports = {
    cadastrarPet: async (req, res) => {
        try {
            const dados = req.body;
            const pet = await Pet.criarPet(dados);

            return res.status(201).json(pet);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    listarPets: async (req, res) => {
        try {
            const dados = req.query;
            const pets = await Pet.getPetsByCliente(dados);

            return res.status(200).json(pets);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};
