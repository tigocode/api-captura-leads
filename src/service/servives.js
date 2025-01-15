const pool = require('./conexao.js');

const cadastrarUsuario = async (nome, email, telefone) => {
  const conexao = await pool.getConnection();
  const resposta =  await conexao.query('INSERT INTO leads (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  conexao.release();
  return resposta;
}

module.exports = {
  cadastrarUsuario,
}
