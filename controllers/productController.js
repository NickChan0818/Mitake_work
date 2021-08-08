const products = [
  {
    id: '1',
    Name: 'PlayStation®5 光碟版',
    Price: 15980,
    ImageUrl: 'https://store.sony.com.tw/resource/file/product_files/CFI-1018A01/14_a05c55101.jpg',
    Description: '利用客製化 CPU、GPU 和具備整合式 I/O 之 SSD 的強大效能， 改寫 PlayStation® 主機的功能極限。'
  },
  {
    id: '2',
    Name: 'PlayStation 4 MEGA PACK',
    Price: 9980,
    ImageUrl: 'https://store.sony.com.tw/resource/file/product_files/ASIA-00381/ASIA-00381_9007c0614.jpg',
    Description: '主機本體採用新型 PS4 CUH-2000 機型'
  }
]

module.exports = {
  products: products,

  product_list: function (req, res) {
    res.json(products.map(product => {
      return {
        Name: product.Name,
        Price: product.Price,
        ImageUrl: product.ImageUrl
      }
    }))
  },

  product_detail: function (req, res) {
    const params = req.params
    const productId = params.id
    const product = products.find(product => product.id === productId)

    if (!product) {
      res.status(400).send('Not found product id')
    } else {
      res.json({
        Name: product.Name,
        Price: product.Price,
        ImageUrl: product.ImageUrl,
        Description: product.Description
      })
    }
  }
}