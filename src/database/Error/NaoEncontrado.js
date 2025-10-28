const ErroBase=require('./ErroBase.js')

class NaoEncontrado extends ErroBase{
    constructor(){
        super("Página não encontrada",404)
    }
}

module.exports=NaoEncontrado;