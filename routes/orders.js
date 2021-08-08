var express = require('express');
var router = express.Router();
let orderController = require('../controllers/orderController')

router.get('/', orderController.get_orders)
router.post('/', orderController.create_order)

module.exports = router;