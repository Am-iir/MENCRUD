const express = require('express')
const app = express()

app.use(express.json()); //handles json
app.use(express.urlencoded({extended:false})); //handles form data

// middleware
const mongoose = require('mongoose');
const Product =  require('./models/product.model');
const productRoute = require('./routes/product.route.js')
//routes
app.use("/api/products",productRoute);

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



// Update Product

app.put('/api/products/:id', async(req,res) => {
 try {
    const {id} = req.params;

   const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product){
        return res.status(404).json({message:"Product not found"});

    }

    const updatedProduct = await Product.findById(id)

    res.status(200).json(updatedProduct);
    

} catch (error) {

    res.status(500).json({message:error.message});
    
 }
} );

//Delete Product

app.delete('/api/products/:id', async(req,res) =>{
try {
    const{id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    if(!product){
        return res.status(404).json({message: "Product Not found"});

    }

    res.status(200).json({message:"Product deleted successfully"});

} catch (error) {
    res.status(500).json({message:error.message});

}

});