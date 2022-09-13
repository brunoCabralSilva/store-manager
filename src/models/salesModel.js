const connection = require('./connection');

const addSalesModel = async () => {
  const [results] = await connection
    .execute('INSERT INTO StoreManager.sales(date) VALUES (NOW())');
  return (results.insertId);
};

const addProductListModel = async (body, id) => {
  await Promise.all(
    body.map((item) => connection
      .execute(`
      INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
        [id, item.productId, item.quantity])),
  );
  const [results] = await connection
    .execute(
      `SELECT product_id AS productId, quantity
      FROM StoreManager.sales_products WHERE sale_id = ?`, [id],
    );
  const valor = { id, results };
  return (valor);
};

module.exports = { addProductListModel, addSalesModel };