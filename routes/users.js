var express = require('express');
var router = express.Router();
let users = [
  { id: '1', name: 'nick', age: 32 }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  res.send(users);
});

router.get('/:id', (req, res) => {
  const params = req.params
  const id = params.id
  const userData = users.find(user => user.id === id)

  if (!userData) {
    res.status(400).send('Not found user')
  } else {
    res.send(userData)
  }
})

router.post('/', (req, res) => {
  const body = req.body
  const name = body.name
  const age = Number(body.age)
  const id = String(Math.max(...users.map(user => Number(user.id))) + 1)
  users.push({ id, name, age })
  res.send(users)
})

module.exports = router;
