# Mitake_work

Product
GET http://localhost:3000/products
GET http://localhost:3000/products/1

Order
POST http://localhost:3000/orders
{
    "UserId": "1",
    "Products": [
        {
            "id": "1",
            "Count": 2
        },
        {
            "id": "2",
            "Count": 2
        }
    ]
}
