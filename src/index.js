const express = require('express');
const app = express();
const cors = require('cors');

const { cadastrarUsuario } = require('./service/servives.js');

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
  const { nome, email, telefone } = req.body;

  await cadastrarUsuario(nome, email, telefone);

  res.status(204).send();
});
app.listen(3000, () => {
  let data =  new Date();
  console.log(`Servidor rodando na PORT 3000 e está em execução desde: ${data.toLocaleString()}`);
});
