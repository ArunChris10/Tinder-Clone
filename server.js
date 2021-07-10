import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import Cors from 'cors'
//app config

const app= express()

const port=process.env.PORT || 8001

const connect_URL='mongodb+srv://admin:5GHUK1I3I0XQKKQk@cluster0.gh58y.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares

app.use(express.json())
app.use(Cors())

//DB Config

mongoose.connect(connect_URL,{
    useNewUrlParser: true.valueOf,
    useCreateIndex: true,
    useUnifiedTopology: true

})
//Api Endpoints

app.get('/',(req,res)=>{
    res.status(200).send('Hello Clever Programmers')

})

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;

    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
//Listeners
app.listen(port,()=>{
    console.log('Listening on local port '+port)
})
