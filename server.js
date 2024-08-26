const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')


const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//test
app.use('/api/v1', require('./routes/testRoutes'))

//
app.get('/', (req,res)=>{
    return res.status(200).send('<p>hello!</p>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server run on port : ${PORT}`)
})