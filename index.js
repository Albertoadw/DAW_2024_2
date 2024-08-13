import express from 'express'
const app = express();

app.get('/',function(req,res){
    res.send("Oi Mundo!")
})

app.get('/Alberto',function(req,res){
     res.send("Alberto!")
})

app.get('/:x', function(req,res){
    const mensagem = "Oi"+req.params.x; 
    res.send()
})

app.get('/:nome/:sobrenome',function(res,res){
    const mensagem = "Oi"+req.params.nome+""+req.params.sobrenome
    res.send(mensagem)
})


app.listen(3000)