let { products } = require('../controllers/productController')
let orders = [
  {
    id: '1',
    UserId: '1',
    Status: 'OK', // OK, FAIL, PENDDING
    Products: [
      {
        id: '1',
        Count: 1
      },
      {
        id: '2',
        Count: 2
      }
    ],
    TotalPrice: 300
  }
]

module.exports = {
  create_order: function (req, res) {
    const requiredFields = ['UserId', 'Products']
    const body = req.body

    if (requiredFields.some(field => !body.hasOwnProperty(field))) {
      res.status(400).send('Fields error')
    } else {
      const userId = body.UserId
      const reqProducts = body.Products // id, Count
      const totalPrice = reqProducts.reduce((prev, curr) =>
        prev + ((products.find(product => product.id === curr.id).Price) * curr.Count), 0)
      const insertData = {
        id: orders.length > 0 ? String(Number((orders[orders.length - 1]).id) + 1) : '1',
        UserId: userId,
        Status: 'OK',
        Products: products,
        TotalPrice: totalPrice
      }

      orders.push(insertData)

      res.json(insertData)
    }
  },

  get_orders: function (req, res) {
    res.json(orders)
  }
}