const express = require('express')

const app = express()


app.get('/', (req,res)=>{
    return res.status(200).send('<p>hello!</p>')
})

const PORT = 8080

app.listen(PORT,()=>{
    console.log('Server Run')
})