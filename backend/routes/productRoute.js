const express = require("express");
const {getProducts, createProduct, getProduct, deleteProduct, updateProduct} = require ('../controllers/productController')

const router = express.Router();

//prikaz svibh podataka
router.get('/', getProducts)

//unos podatka
router.post('/', createProduct)

//prikaz jednogp podatak
router.get('/:id', getProduct)



//delete podatKA
router.delete('/:id', deleteProduct)

//update podataka
router.patch('/:id', updateProduct)

module.exports = router;
