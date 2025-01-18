const validarDadosAutenticacao =  (usuario, senha) => {
  if(usuario === 'admin' && senha === '1234') {
    return true;
  } else {
    return false;
  }  
}

module.exports = {
  validarDadosAutenticacao
}
