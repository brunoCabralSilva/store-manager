const connection = require('./connection');

const allProductsModel = async () => {
  const query = await connection
    .execute('SELECT * FROM StoreManager.products');
  const [results] = await query;
  return results;
};

const oneProductModel = async (id) => {
  const query = await connection
    .execute(`SELECT * FROM StoreManager.products WHERE id = ${Number(id)}`);
  const [results] = await query;
  return results[0];
};

module.exports = { allProductsModel, oneProductModel };