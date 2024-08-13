import express from 'express'
const app = express();

app.get('/',function (req,res){
    res.send("Oi Mundo!")
})

app.get('/Alberto',function (req,res){
     res.send("Oi Diego!")
})

app.listen(3000)