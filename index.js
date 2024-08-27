const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 3000;

require("dotenv").config();

// Configuração básica do CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});