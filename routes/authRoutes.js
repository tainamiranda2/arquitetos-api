const {PrismaClient} = require("@prisma/client")
const prisma =new PrismaClient();

const { req, res} = require("express");
const express =require("express")
const authRoutes=express.Router()

authRoutes.post("/auth",async(req, res)=>{
    var {email ,senha}=req.body;
    if(email !=undefined){
        const user = await prisma.user.find({where:
            {email:email}}) 

    if(user!=undefined){

          if(user.senha==senha){
            res.status(200).json(({token:'falso'}))
                }else{
                    res.status(404).json('credenciais invalida')
                }
        }else{
         res.status(404).json("email não existe")
            }
    
}else{
    res.status(404).json("email é invalido")

}

})
module.exports=authRoutes;