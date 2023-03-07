var servicoModels=require("../models/clienteModels")

class servicoController{
    
    async index(req, res){
        console.log(req.body)
        res.send("metodo get")
    }

    async create(req, res){
       // console.log(req.body)
        var {nome,	descricao,estado	,prazoI,	prazoF,	arquiteto_id,	cliente_id	}=(req.body)

        if(nome == undefined || nome ===''){
            res.status(400)
            res.json("nome vazio")
                    }
                    
              if(descricao == undefined || descricao ===''){
                     res.status(400)
              res.json("descrição vazio")
                    }

        if(estado == undefined || estado ===''){
            res.status(400)
            res.json("estado vazio")
                    }
            
        if(prazoI == undefined || prazoF ===''){
            res.status(400)
            res.json("prazo Final vazio")
                    }

        if(prazoI == undefined || prazoI ===''){
                  res.status(400)
              res.json("prazo inicial vazio")
            }
        
            if(arquiteto_id == undefined || arquiteto_id ===''){
                res.status(400)
            res.json("arquito desta vazio")
          }

          if(cliente_id == undefined || cliente_id ===''){
            res.status(400)
        res.json("cliente vazio")
      }

    await servicoModels.new(nome,	descricao,estado	,prazoI,	prazoF,	arquiteto_id,	cliente_id	)

      res.status(200)
        res.send("Tudo ok com o serviço")
    }

}

module.exports=new servicoController();