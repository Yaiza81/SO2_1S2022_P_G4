const mongoose=require('mongoose');
const url=`mongodb+srv://sopes2:grupo4@supermercado.bm9vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url, {
         useNewUrlParser: true,    
         useUnifiedTopology: true 
        })
            .then(db => console.log('Db is connected to ', db.connection.host))  
            .catch(err => console.error(err)) 

module.exports = mongoose 