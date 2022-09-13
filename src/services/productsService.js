const {
  allProductsModel,
  oneProductModel,
  registerProductModel,
} = require('../models/productsModel');

const allProductsService = async () => {
  const query = await allProductsModel();
  return query;
};

const oneProductService = async (id) => {
  const query = await oneProductModel(id);
  return query;
};

const registerProductService = async (name) => {
  const query = await registerProductModel(name);
  return query;
};

module.exports = {
  allProductsService,
  oneProductService,
  registerProductService,
};