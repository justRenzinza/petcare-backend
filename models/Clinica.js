const pool = require('./Database.js');

class Clinica {
    static async getClinicas() {
        const client = await pool.connect();
        const query = 'SELECT id_clinica, unidade, nome FROM clinica';

        try {
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            throw new Error('Erro ao buscar clínicas: ' + error.message);
        } finally {
            client.release();
        }
    }
}

module.exports = Clinica;