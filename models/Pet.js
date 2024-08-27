const pool = require('./Database.js');

class Pet {
    static async criarPet(dados) {
        const client = await pool.connect();
        const query = `
            INSERT INTO pet (nome, raca, especie, idade, tiposangue, vacina, enfermidade, id_cliente) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
        `;
        const values = [
            dados.nome, dados.raca, dados.especie, dados.idade, 
            dados.tiposangue, dados.vacina, dados.enfermidade, dados.id_cliente
        ];

        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro ao criar pet: ' + error.message);
        } finally {
            client.release();
        }
    }

    // Deixei sem where, pois entendi que irá mostrar todos e não os agendamentos por cliente
    static async getPets() {
        const client = await pool.connect();
        const query = 'SELECT * FROM pet';

        try {
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            throw new Error('Erro ao buscar pets: ' + error.message);
        } finally {
            client.release();
        }
    }
}

module.exports = Pet;
