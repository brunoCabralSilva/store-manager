const connection = require('./connection');

const numberIdSalesModel = async () => {
  const [results] = await connection.execute('SELECT sale_id FROM StoreManager.sales_products');
  return (results);
};

const addProductListModel = async (body, id) => {
  const newId = id + 1;
  await Promise.all(
    body.map((item) => connection
      .execute(`
      INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
        [newId, item.productId, item.quantity])),
);
};

module.exports = { addProductListModel, numberIdSalesModel };