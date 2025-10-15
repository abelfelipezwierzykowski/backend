class ErroBase extends Error{
constructor(mensagem="Erro interno de servidor",status=500){
    super(mensagem);
    this.message = mensagem;
    this.status = status;
}
enviarResposta(res){
    res.status(this.status).json({
        mensagem:this.message,
        status:this.status
})
}
}
module.exports=ErroBase;