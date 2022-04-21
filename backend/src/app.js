const express=require('express')
const app=express();
const bodyParser =require('body-parser')
const morgan=require('morgan')
const cors=require('cors')

const index=require('./routes/index.routes')

require('./database')
require('dotenv').config()

app.set('port',process.env.PORT||4000)
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'500mb'}))
app.use(bodyParser.urlencoded({limit:'500mb',extended:true}))

app.use('/',index)


app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})