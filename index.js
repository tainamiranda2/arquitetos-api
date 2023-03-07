const express = require("express")
const app = express()
var router = require("./routes/routes")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json())


app.use("/",router);
//conexão com o banco de dados

app.listen(1700,()=>{
    console.log("Aqui funcionou")
})

