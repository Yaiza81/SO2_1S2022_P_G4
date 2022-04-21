'use strict'
const express=require('express')
const router=express.Router();
const cors=require('cors')
const Reporte=require('../models/reporte.model')

var contador = 0;

const corsOptions={
    origin:'*',
    optionSuccessStatus:200
}

router.get('/',(req,res)=>{
    res.send(`Funciona el servidor`)
})

router.post('/agregar',cors(corsOptions),async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');     res.setHeader('Access-Control-Allow-Credentials', true);
    const {carnet,nombre,curso,mensaje}=req.body
    const date=new Date()
    const fecha=`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    console.log(fecha)
    contador++;
    var servidor= contador;
    const nuevo=new Reporte({
        carnet,
        nombre,
        curso,
        mensaje,
        servidor,
        fecha
    })
    await nuevo.save((err)=>{
        if (err){
            console.log(err)
            res.json({msg:"Error"})
        }else{
            res.json({msg:"Almacenado"})
        }
    })
})


router.get('/listar',cors(corsOptions),async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');     
    res.setHeader('Access-Control-Allow-Credentials', true);
    const datos=await Reporte.find({})
    res.send(datos)
})


router.get('/listar/:id',cors(corsOptions),async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');     
    res.setHeader('Access-Control-Allow-Credentials', true);
    const datos=await Reporte.find({carnet:req.params.id})
    res.send(datos)
})


module.exports=router