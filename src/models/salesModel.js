const connection = require('./connection');

const searchProductIdModel = async (productId) => {
  const query = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ? ', [Number(productId)]);
  const [results] = query;
  return results;
};

module.exports = searchProductIdModel;