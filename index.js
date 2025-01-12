const express = require('express')
const app = express()

app.use(express.json());

// Using Node.js `require()`
const mongoose = require('mongoose');
const Product =  require('./models/product.model');


mongoose.connect("mongodb+srv://maharjanamir101:123456qwerty@backenddb.k4pdo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Çonnected to database');
    app.listen(3000,() =>{
        console.log('Server is running on port 3000');
    
    });
})
.catch( () => {
    console.log('Connection failed');
});



app.get('/', (req, res) => {
    res.send("Hello From Node API Server Updated");
})

app.post('/api/products', async(req,res) => {
   
    try{

        const product = await Product.create(req.body);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.get('/api/products', async(req,res) => {
   
    try{

        const products = await Product.find({});
        res.status(200).json(products);

    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.get('/api/products/:id',async(req,res) => {

    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});
  
    }
});