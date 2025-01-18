const express = require('express');
const app = express();
const cors = require('cors');

const { cadastrarUsuario } = require('./service/servives.js');
const { GeraToToken } = require('./service/autenticacao.js');
const { validarUsuario } = require('./validations/validar.js');
const { validarDadosAutenticacao } = require('./validations/validar_autenticacao.js');

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
  const { nome, email, telefone } = req.body;

  const usuarioValido = validarUsuario(nome, email, telefone);

  if(usuarioValido.status) {
    await cadastrarUsuario(nome, email, telefone);
    res.status(204).send();
  } else {
    res.status(400).send({mensagem: usuarioValido.mensagem});
  }
});
app.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;

  const autenticacaoValida = validarDadosAutenticacao(usuario, senha);

  if(!autenticacaoValida) {
    res.status(401).send({mensagem: 'Usuário não autorizado!'});
    return;
  }
  const token = GeraToToken();

  res.status(200).send({ token: token});
});
app.listen(3000, () => {
  let data = new Date();
  console.log(`Servidor rodando na PORT 3000 e está em execução desde: ${data.toLocaleString()}`);
});
