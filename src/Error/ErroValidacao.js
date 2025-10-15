const RequisicaoIncorreta = require("./RequisicaoIncorreta.js");

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map(e => e.message)
      .join(", ");
      
    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

module.exports = ErroValidacao;
