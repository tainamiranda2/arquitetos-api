var clienteModels=require("../models/clienteModels")

class clienteController{
    
    async index(req, res){
        console.log(req.body)
        res.send("metodo get")
    }

    async create(req, res){
       // console.log(req.body)
        var {nome ,email ,  telefone ,  genero ,  idade ,  senha,papel}=(req.body)

        if(nome == undefined || nome ===''){
            res.status(400)
            res.json("nome vazio")
                    }
                    
              if(senha == undefined || senha ===''){
                     res.status(400)
              res.json("senha vazio")
                    }

        if(email == undefined || email ===''){
            res.status(400)
            res.json("email vazio")
                    }
            
        if(telefone == undefined || telefone ===''){
            res.status(400)
            res.json("telefone vazio")
                    }

        if(genero == undefined || genero ===''){
                  res.status(400)
              res.json("genero vazio")
            }
        
            if(idade == undefined || idade ===''){
                res.status(400)
            res.json("idade vazio")
          }

          if(papel == undefined || papel ===''){
            res.status(400)
        res.json("papel vazio")
      }

    await clienteModels.new(nome ,email,telefone,genero ,idade, senha,papel)

      res.status(200)
        res.send("Tudo ok com o cliente")
    }

}

module.exports=new clienteController();