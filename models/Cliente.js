const pool = require('./Database.js');

class Cliente {
    static async criarCliente(dados) {
        const client = await pool.connect();
        const query = `
            INSERT INTO cliente (nome, email, senha, cpf) 
            VALUES ($1, $2, $3, $4) RETURNING *;
        `;
        const values = [dados.nome, dados.email, dados.senha, dados.cpf];

        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro ao criar cliente: ' + error.message);
        } finally {
            client.release();
        }
    }

    static async autenticar(email, senha) {
        const client = await pool.connect();
        const query = 'SELECT * FROM cliente WHERE email = $1 AND senha = $2';
        const values = [email, senha];

        try {
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro ao autenticar cliente: ' + error.message);
        } finally {
            client.release();
        }
    }
}

module.exports = Cliente;