const pool = require('./Database.js');

class Agendamento {
    static async criarAgendamento(dados) {
        const client = await pool.connect();
        const query = `
            INSERT INTO agendamento (data, horario, tipo, unidade, detalhes, id_pet, id_profissional)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;
        const values = [
            dados.data, dados.horario, dados.tipo, dados.unidade_id,
            dados.detalhes, dados.id_pet, 1
        ];

        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro ao criar agendamento: ' + error.message);
        } finally {
            client.release();
        }
    }

    // Deixei sem where, pois entendi que irá mostrar todos e não os agendamentos por cliente
    static async getAgendamentosByCLiente(id_cliente) {
        const client = await pool.connect();
        const query = `
            SELECT 
                a.id_agenda, 
                a.data, 
                a.horario, 
                a.detalhes, 
                a.unidade, 
                c.nome AS nome_cliente,
                pt.nome AS nome_pet
            FROM 
                agendamento a 
            INNER JOIN 
                pet pt ON a.id_pet = pt.id_pet 
			INNER JOIN 
                cliente c ON pt.id_cliente = c.id_cliente 
            WHERE c.id_cliente = $1
        `;
        const values = [id_cliente]

        try {
            const result = await client.query(query, values);

            console.log(result)
            return result.rows;
        } catch (error) {
            throw new Error('Erro ao buscar agendamentos: ' + error.message);
        } finally {
            client.release();
        }
    }
}

module.exports = Agendamento;