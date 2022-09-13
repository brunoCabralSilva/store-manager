const { oneProductModel } = require('../models/productsModel');

const searchProductIdService = async (item) => {
  const query = await oneProductModel(item);
  if (query === undefined) {
    return false;
  } return true;
};

module.exports = searchProductIdService;