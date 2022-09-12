const {
  allProductsModel,
  oneProductModel,
  registerProductModel,
} = require('../models/productsModel');

const allProductsService = async (req, res) => {
  const query = await allProductsModel();
  return res.status(200).json(query);
};

const oneProductService = async (req, res) => {
  const { id } = req.params;
  const query = await oneProductModel(id);
  if (query) {
    return res.status(200).json(query);
  } return res.status(404).json({ message: 'Product not found' });
};

const registerProductService = async (req, res) => {
  const { name } = req.body;
  const query = await registerProductModel(name);
  return res.status(201).json(query);
};

module.exports = { allProductsService, oneProductService, registerProductService };