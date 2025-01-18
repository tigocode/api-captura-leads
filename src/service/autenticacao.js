const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../env/env.js');

const GeraToToken = () => {
  const usuarioLogado = { 'usuarioId': 1 };
  const token = jwt.sign(usuarioLogado, JWT_SECRET, { expiresIn: '30d' });

  return token;
}

module.exports = {
  GeraToToken
}
