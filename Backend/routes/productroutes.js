const express = require('express')
const router = express.Router()
const productcontroller = require('../controller/productcontroller')

router.post('/addproduct', productcontroller.postproduct)
router.get('/getproducts', productcontroller.getproducts)
router.put('/updateproduct/:id', productcontroller.updateproduct)
router.delete('/deleteproduct/:id', productcontroller.deleteproduct)
router.get('/paginateprod', productcontroller.paginateprod)
router.get('/top-expensive', productcontroller.ExpensivefiveProducts)
router.get('/top-sellers', productcontroller.TopSellers)

module.exports = router
