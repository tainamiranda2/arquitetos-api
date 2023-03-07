const {PrismaClient} = require("@prisma/client")
const prisma =new PrismaClient();

const { req, res} = require("express");
const express =require("express")
const arquitetoRoutes=express.Router()

arquitetoRoutes.get("/arquiteto",async(req, res)=>{
  const arquiteto = await prisma.arquiteto.findMany()    
 
    
  return res.status(200).json(arquiteto)
})

arquitetoRoutes.post("/arquiteto",async(req, res)=>{
     //  console.log(req.body)
        var {nome ,email ,  telefone ,  genero ,  idade ,  senha,papel}=(req.body)

       if(nome == undefined || nome ===''){
        return    res.status(400).json("nome vazio")
                    }
                    
              if(senha == undefined || senha ===''){
                 return    res.status(400).json("senha vazio")
                    }

        if(email == undefined || email ===''){
          return  res.status(400).json("email vazio")
                    }
            
        if(telefone == undefined || telefone ===''){
          return  res.status(400).json("telefone vazio")
                    }

        if(genero == undefined || genero ===''){
               return   res.status(400).json("genero vazio")
            }
        
            if(idade == undefined || idade ===''){
              return  res.status(400).json("idade vazio")
          }

          if(papel == undefined || papel ===''){
        return    res.status(400).json("papel vazio")
      }
     const arquiteto= await prisma.arquiteto.create({
        data:{
          nome ,email ,  telefone ,  genero ,  idade ,  senha,papel
        },
      })
      return res.status(200).json(arquiteto)
   
    })
  
  
  
module.exports=arquitetoRoutes;