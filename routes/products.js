var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

router.get('/', productController.product_list)
router.get('/:id', productController.product_detail)

module.exports = router;