const express = require('express')
const app = express()

// Using Node.js `require()`
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://maharjanamir101:fFpF3O5nJcfyF06i@backenddb.k4pdo.mongodb.net/Node-API/?retryWrites=true&w=majority&appName=BackendDB")
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