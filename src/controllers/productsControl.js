const {
  allProductsService,
  oneProductService,
  registerProductService,
  updateProductService,
  deleteProductService,
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

const updateProductControl = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = await updateProductService(id, name);
  if (item) {
    return res.status(200).json(item);
  } return res.status(404).json({ message: 'Product not found' });
};

const deleteProductControl = async (req, res) => {
  const { id } = req.params;
  const del = await deleteProductService(id);
  if (del) {
    return res.status(204).json();
  } return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  allProductsControl,
  oneProductControl,
  registerProductControl,
  updateProductControl,
  deleteProductControl,
};