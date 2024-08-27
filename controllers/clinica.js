const Clinica = require('../models/Clinica.js');

module.exports = {
    listarClinicas: async (req, res) => {
        try {
            const clinicas = await Clinica.getClinicas();

            return res.status(200).json(clinicas);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};