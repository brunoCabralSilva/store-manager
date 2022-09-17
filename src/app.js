const express = require('express');
const products = require('./routers/products');
const sales = require('./routers/sales');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', products);
app.use('/sales', sales);

module.exports = app;