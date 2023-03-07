var knex =require("../database/connetion")
var bcrypt=require("bcrypt")

class clienteModels{
    async new(nome ,email ,  telefone ,  genero ,  idade ,  senha,papel){
try{
    await knex.insert({nome ,email ,  telefone ,  genero ,  idade ,  senha,papel}).table("cliente")

}catch(err){
    console.log(err)
}
    

    }
}
module.exports=new  clienteModels()