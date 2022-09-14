const { oneProductModel } = require('../models/productsModel');
const { addProductListModel, addSalesModel, oneSaleModel } = require('../models/salesModel');
const { allSalesModel } = require('../models/salesModel');

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

const allSalesService = async () => {
  const allSales = await allSalesModel();
  return allSales;
};

const oneSaleService = async (id) => {
  const oneSale = await oneSaleModel(id);
  return oneSale;
};

module.exports = { searchPidService, allSalesService, oneSaleService };