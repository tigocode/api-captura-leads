const validarNome = (nome) => {
  const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-'´`]+$/;
  const isValid = regexNome.test(nome) && nome.length >= 2;
  return isValid;
}
const validarEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = regexEmail.test(email);
  return isValid;
}
const validarTelefone = (telefone) => {
  const regexTelefone = /^\(?(\d{2})\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;
  const isValid = regexTelefone.test(telefone);
  return isValid;
}
const validarUsuario = (nome, email, telefone) => {
  const nomeValido = validarNome(nome);
  const emailValido = validarEmail(email);
  const telefoneValido = validarTelefone(telefone);

  const usuarioValido = nomeValido && emailValido && telefoneValido;

  if(usuarioValido) {
    return {status: true, mensagem: ''}
  } else {
    return {status: false, mensagem: 'nome, email ou telefone inválido, valide os dados antes de tentar novamente!'}
  }
}

module.exports = {
  validarUsuario,
}
