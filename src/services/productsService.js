const {
  allProductsModel,
  oneProductModel,
  registerProductModel,
  updateProductModel,
  deleteProductModel,
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

const updateProductService = async (id, name) => {
  const query = await oneProductService(id);
  if (query === undefined) {
    return false;
  } 
  const query2 = await updateProductModel(id, name);
  return query2;
};

const deleteProductService = async (id) => {
  const query = await oneProductService(id);
  console.log(query);
  if (query === undefined) {
    return false;
  }
  const query2 = await deleteProductModel(id);
  return query2;
};

module.exports = {
  allProductsService,
  oneProductService,
  registerProductService,
  updateProductService,
  deleteProductService,
};