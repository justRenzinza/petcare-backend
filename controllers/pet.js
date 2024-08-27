const Pet = require('../models/Pet.js');

module.exports = {
    cadastrarPet: async (req, res) => {
        try {
            const dados = req.body;
            console.log(dados);
            const pet = await Pet.criarPet(dados);
            console.log(pet);

            return res.status(201).json(pet);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    listarPets: async (req, res) => {
        try {
            console.log(req.query)
            const dados = req.query;
            console.log(dados);
            const pets = await Pet.getPetsByCliente(dados);
            console.log(pets);

            return res.status(200).json(pets);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};
