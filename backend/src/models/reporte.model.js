const {Schema,model}=require('mongoose')


const reporte=new Schema({
    carnet:String,
    nombre:String,
    curso:String,
    mensaje:String,
    servidor:String,
    fecha: Date
});


module.exports=model('reporte',reporte)