const express = require('express');
const app = express();
const cors = require("cors");
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 3000;

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //pra resolver o erro de cors

// Use as rotas definidas em routes.js
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});