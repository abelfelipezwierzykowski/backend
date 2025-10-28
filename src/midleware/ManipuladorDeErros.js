const { ValidationError, UniqueConstraintError } = require('sequelize');
const ErroBase = require('../database/Error/ErroBase.js');
const RequisicaoIncorreta = require('../database/Error/RequisicaoIncorreta.js');
const ErroValidacao = require('../database/Error/ErroValidacao.js');
const NaoEncontrado = require('../database/Error/NaoEncontrado.js');


// eslint-disable-next-line no-unused-vars
function ManipuladorDeErros(erro, req, res, next) {
  console.error(erro); // Mostra no terminal o erro completo

  // 🔹 Erros de validação Sequelize
  if (erro instanceof ValidationError) {
    return new ErroValidacao(erro).enviarResposta(res);
  }

  // 🔹 Erros de restrição única (chave duplicada)clear
  
  if (erro instanceof UniqueConstraintError) {
    return new RequisicaoIncorreta("O valor informado já está em uso.").enviarResposta(res);
  }

  // Erros de rota não encontrada
  if (erro instanceof NaoEncontrado) {
    return erro.enviarResposta(res);
  }

  // Outros erros com status definido
  if (erro.status === 400) {
    return new RequisicaoIncorreta().enviarResposta(res);
  }

  // Qualquer outro erro genérico
  return new ErroBase().enviarResposta(res);
}

module.exports = ManipuladorDeErros;


//estudar sobre Validação personalizada da alura, curso  node.js:lidando com buscas, filtros e paginação e erros em uma api Restful