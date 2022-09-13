const { oneProductModel } = require('../models/productsModel');
const { addProductListModel, addSalesModel } = require('../models/salesModel');

const searchPidService = async (body) => {
  const searchId = await Promise.all(
    body.map((item) => oneProductModel(item.productId)),
  );
  if (searchId.some((item) => item === undefined)) {
    return false;
  }
  const id1 = await addSalesModel();
  const value = await addProductListModel(body, id1);
  return value;
};

module.exports = { searchPidService };