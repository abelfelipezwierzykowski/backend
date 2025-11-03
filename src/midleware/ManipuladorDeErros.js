const { ValidationError, UniqueConstraintError } = require('sequelize');
const ErroBase = require('../database/Error/ErroBase.js');
const RequisicaoIncorreta = require('../database/Error/RequisicaoIncorreta.js');
const ErroValidacao = require('../database/Error/ErroValidacao.js');
const NaoEncontrado = require('../database/Error/NaoEncontrado.js');


// eslint-disable-next-line no-unused-vars
function ManipuladorDeErros(erro, req, res, next) {
  console.error(erro); // Mostra no terminal o erro completo

  if (erro instanceof ValidationError) {
    return new ErroValidacao(erro).enviarResposta(res);
  }


  
  if (erro instanceof UniqueConstraintError) {
    return new RequisicaoIncorreta("O valor informado já está em uso.").enviarResposta(res);
  }

  if (erro instanceof NaoEncontrado) {
    return erro.enviarResposta(res);
  }


  if (erro.status === 400) {
    return new RequisicaoIncorreta().enviarResposta(res);
  }


  return new ErroBase().enviarResposta(res);
}

module.exports = ManipuladorDeErros;


//estudar sobre Validação personalizada da alura, curso  node.js:lidando com buscas, filtros e paginação e erros em uma api Restful