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
      FROM StoreManager.sales_products WHERE sale_id = ? ORDER BY products_id`, [id],
    );
  const valor = { id, results };
  return (valor);
};

const allSalesModel = async () => {
  const [results] = await connection
    .execute(
      `SELECT s.id AS saleId,
        s.date,
        sp.product_id AS productId,
        sp.quantity
        FROM StoreManager.sales AS s
        INNER JOIN StoreManager.sales_products AS sp
        ON s.id = sp.sale_id
        ORDER BY id, product_id`,
    );
  return results;
};

const oneSaleModel = async (id) => {
  const [results] = await connection
    .execute(
      `SELECT s.date,
      sp.product_id AS productId,
      sp.quantity
      FROM StoreManager.sales AS s
      INNER JOIN sales_products AS sp
      ON s.id = sp.sale_id
      WHERE s.id = ?
      ORDER BY id, product_id`, [id],
  );
  return results;
};

module.exports = { addProductListModel, addSalesModel, allSalesModel, oneSaleModel };