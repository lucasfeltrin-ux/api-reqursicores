

const express = require("express");
 const fs = require("fs"); 

 const app = express();
 const port = 3000; 
 
 app.use(express.json());


//http://localhost:3000/saudacao?nome=lucas
 app.get("/saudacao",(req,res)=>{
     const name = req.query.name;
     
     
    

     if(!name){
        return res.status(404).json
        {
            error:"nome não foi informado"
        }
     }
     res.json(
        {
        mensagem:`saudação${nome}!`
        }
    )
 })
 
 app.post("/imc",(req,res) =>{
    const{ nome,idade,altura,peso }= req.body
   
    if(!nome || !idade || !altura ||!peso){
        return res.status(404).json({erro: "dados inconpletos"})
    }
    

    const imc = peso / (altura*altura);

    res.json({
        nome,
        idade,
        imc: imc.toFixed(2)
    })
    
 })

 //finalzao 
 app.listen(port, ()=>{
    console.log(`servidor rodando em http://localhost:${port}`)
  })