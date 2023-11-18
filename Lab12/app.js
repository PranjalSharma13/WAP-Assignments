// app.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 



const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
];

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const usersRouter = express.Router();
usersRouter.get('/', (req, res) => {
  res.json(users);
});

usersRouter.post('/', (req, res) => {
  console.log('Received POST request to /users:', req.body);
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

app.use('/users', usersRouter);

const productsRouter = express.Router();
productsRouter.get('/', (req, res) => {
  res.json(products);
});

productsRouter.post('/', (req, res) => {
  console.log('Received POST request to /products:', req.body);
  const newProduct = { id: products.length + 1, name: req.body.name };
  products.push(newProduct);
  res.json(newProduct);
});

app.use('/products', productsRouter);

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
