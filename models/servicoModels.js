var knex =require("../database/connetion")
var bcrypt=require("bcrypt")

class servicoModels{
    async new(nome,	descricao,estado,prazoI,prazoF,	arquiteto_id,cliente_id){
try{
    await knex.insert({nome,descricao,estado,prazoI,prazoF,	arquiteto_id,cliente_id}).table("servico")

}catch(err){
    console.log(err)
}
    

    }
}
module.exports=new  servicoModels()