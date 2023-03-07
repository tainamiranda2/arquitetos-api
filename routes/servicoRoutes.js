const {PrismaClient} = require("@prisma/client")
const prisma =new PrismaClient();

const { req, res} = require("express");
const express =require("express")
const servicoRoutes=express.Router()

servicoRoutes.get("/servico",async(req, res)=>{
    const servico = await prisma.servico.findMany()    
   
      
    return res.status(200).json(servico)
  })

  servicoRoutes.post("servico", async(req, res)=>{
    var {nome,	descricao,estado	,prazoI,	prazoF,	arquiteto_id,	cliente_id	}=(req.body)

    if(nome == undefined || nome ===''){
      return  res.status(400).json("nome vazio")
                }
                
          if(descricao == undefined || descricao ===''){
          return       res.status(400).json("descrição vazio")
                }

    if(estado == undefined || estado ===''){
       return res.status(400).json("estado vazio")
                }
        
    if(prazoI == undefined || prazoF ===''){
     return   res.status(400).json("prazo Final vazio")
                }

    if(prazoI == undefined || prazoI ===''){
          return    res.status(400).json("prazo inicial vazio")
        }
    
        if(arquiteto_id == undefined || arquiteto_id ===''){
        return    res.status(400).json("arquito desta vazio")
      }

      if(cliente_id == undefined || cliente_id ===''){
       return res.status(400).json("cliente vazio")
  }

const servico= await prisma.create({
   date:{
    nome,	descricao,estado	,prazoI,	prazoF,	arquiteto_id,	cliente_id	
   } ,
})

 return res.status(200).json(servico)


  })

  module.exports=servicoRoutes;