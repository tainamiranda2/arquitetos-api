const express = require("express")
const app = express()
const cors=require("cors")
app.use(cors())
//var router = require("./routes/routes")
const arquitetoRoutes=require("./routes/arquitetoRoutes")
const clienteRoutes=require("./routes/clienteRoutes")
const servicoRoutes=require("./routes/servicoRoutes")

//const Routes=require("./routes/ArquitetoRoutes")

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json())

app.use(arquitetoRoutes)
app.use(clienteRoutes)
app.use(servicoRoutes)

//app.use("/",router);
//conexão com o banco de dados

app.listen(1700,()=>{
    console.log("Aqui funcionou")
})

