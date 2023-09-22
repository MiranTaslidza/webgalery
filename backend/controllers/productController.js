const productModels = require('../models/productModels')


//prikaz svibh podataka
const getProducts = async (req, res)=>{ 
    const product = await productModels.find({}).sort({ createdAt: -1 });
    res.status(200).json(product);
}

//unos podatka
const createProduct = async (req, res)=>{ 
    const { title, subtitle, slide, width, height, price, interval, image } = req.body;
    try {
      const product = await productModels.create({title, subtitle, slide, width, height, price, interval, image});
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  
};

//prikaz jednogp podatak
const getProduct = async (req, res)=>{
    res.json({msg: 'get single product'})
};



//delete podatKA
const deleteProduct = async (req, res)=>{
    res.json({msg: 'delete product'})
};

//update podataka
const updateProduct = async (req, res)=>{
    res.json({msg: 'update product'})
}

module.exports={
    getProducts,
    createProduct, 
    getProduct,
    deleteProduct,
    updateProduct
}