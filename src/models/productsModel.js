const connection = require('./connection');

const allProductsModel = async () => {
  const query = await connection
    .execute('SELECT * FROM StoreManager.products');
  const [results] = await query;
  return results;
};

const oneProductModel = async (id) => {
  const query = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [Number(id)]);
  const [results] = await query;
  console.log(results);
  return results[0];
};

const registerProductModel = async (name) => {
  const query = await connection
    .execute('INSERT INTO StoreManager.products(name) VALUES (?)', [name]);
  const [results] = await query;
  const { insertId } = results;
  const itemAdd = await oneProductModel(insertId);
  return itemAdd;
};

module.exports = { allProductsModel, oneProductModel, registerProductModel };