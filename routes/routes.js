
//verbos
/*app.get("/",(req,res)=>{
console.log("tudo bem")
})*/

var express = require("express")
var app = express();
var router = express.Router();

var arquitetoController=require("../controllers/arquitetoControler")
var clienteController=require("../controllers/clienteControler")
var servicoController=require("../controllers/servicoControler")

//router.get('/', LoginController);

router.get('/arquiteto', arquitetoController.index);
router.post('/arquiteto', arquitetoController.create);

router.get('/cliente', clienteController.index);
router.post('/cliente', clienteController.create);

router.get('/servico', servicoController.index);
router.post('/servico', servicoController.create);
module.exports=router;