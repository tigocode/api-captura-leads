const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../env/env.js');

const GeraToToken = () => {
  const usuarioLogado = { 'usuarioId': 1 };
  const token = jwt.sign(usuarioLogado, JWT_SECRET, { expiresIn: '30d' });

  return token;
}
const validarToken = (token) => {
  let status;
  let codigo;
  
  jwt.verify(token, JWT_SECRET, function(erro, dadosToken) {
    if(erro == null && dadosToken.usuarioId == 1) {
      status = true;
      codigo = 200;
    } else {
      status = false;
      codigo = 401;
    }
  });

  return {
    status: status,
    codigo: codigo,
  }
}

module.exports = {
  GeraToToken,
  validarToken
}
