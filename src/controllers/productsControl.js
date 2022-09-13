const {
  allProductsService,
  oneProductService,
  registerProductService,
} = require('../services/productsService');

const allProductsControl = async (req, res) => {
  const query = await allProductsService();
  return res.status(200).json(query);
};

const oneProductControl = async (req, res) => {
  const { id } = req.params;
  const item = await oneProductService(id);
  if (item) {
    return res.status(200).json(item);
  } return res.status(404).json({ message: 'Product not found' });
};

const registerProductControl = async (req, res) => {
  const item = await registerProductService(req.body.name);
  return res.status(201).json(item);
};

module.exports = { allProductsControl, oneProductControl, registerProductControl };