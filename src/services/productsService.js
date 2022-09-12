const { allProductsModel, oneProductModel } = require('../models/productsModel');

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

module.exports = { allProductsService, oneProductService };