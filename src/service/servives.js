const pool = require('./conexao.js');

const cadastrarUsuario = async (nome, email, telefone) => {
  const conexao = await pool.getConnection();
  const resposta =  await conexao.query('INSERT INTO leads (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  conexao.release();
  return resposta;
}

const retornarLeads = async () => {
  const conexao = await pool.getConnection();
  const resposta = await conexao.query('SELECT * FROM leads');
  const leads = resposta[0];
  conexao.release();
  return leads;
}

module.exports = {
  cadastrarUsuario,
  retornarLeads
}
