require('dotenv').config()
const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')


const app = express();

// Omogućite CORS middleware prije ruta
app.use(cors({ origin: '*' })); // Postavite origin na "*" kako bi se omogućili zahtjevi s bilo kojeg izvora

app.use(express.json())


app.use('/api/product', productRoute);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch((error)=>{
    console.log(error);
})
