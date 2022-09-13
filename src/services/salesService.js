const { oneProductModel } = require('../models/productsModel');

const searchPidService = async (body) => {
  const searchId = await Promise.all(
    body.map((item) => oneProductModel(item.productId)),
  );
  if (searchId.some((item) => item === undefined)) {
    return false;
  } 
  return true;
};

module.exports = { searchPidService };