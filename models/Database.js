const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://gahhkiig:DIm3LiiJEkeXFfXVw6env44HOE3xIf0k@kesavan.db.elephantsql.com/gahhkiig',
  max: 1000
});

console.log("Criou pool de conexões no PostgreSQL!");

async function connect() {
  const client = await pool.connect();
  const release = client.release.bind(client);

  client.release = () => {
    release();
  };
  return client;
}

module.exports = { connect };