const express = require('express')
const router = express.Router()
const {getAllProducts,createProduct, deleteProduct,getProduct,getOneProduct} = require('../controller/productsController')

router.route('/').get(getAllProducts).post(createProduct)

router.route('/:id').get(getProduct,getOneProduct).delete(getProduct,deleteProduct)





module.exports = router