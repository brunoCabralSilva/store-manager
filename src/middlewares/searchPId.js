const searchProductIdService = require('../services/searchProductIdService');

const searchPId = async (req, res, next) => {
  const list = req.body;
  const searchId = await Promise.all(
    list.map((item) => searchProductIdService(item.productId)),
  );
  if (searchId.some((item) => item === false)) {
    return res.status(404).json('Product not found');
  }
  next();
};

module.exports = searchPId;