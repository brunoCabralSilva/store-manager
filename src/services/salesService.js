const { oneProductModel } = require('../models/productsModel');
const { addProductListModel, numberIdSalesModel } = require('../models/salesModel');

const searchPidService = async (body) => {
  const searchId = await Promise.all(
    body.map((item) => oneProductModel(item.productId)),
  );
  if (searchId.some((item) => item === undefined)) {
    return false;
  }
  const ids = await numberIdSalesModel();
  let id = 0;
  for (let i = 0; i < ids.length; i += 1) {
    if (ids[i].sale_id > id) id = ids[i].sale_id;
  }
  const value = await addProductListModel(body, id);
  return value;
};

module.exports = { searchPidService };