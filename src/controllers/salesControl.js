const { searchPidService, allSalesService, oneSaleService } = require('../services/salesService');

const salesRegisterControl = async (req, res) => {
  const searchPID = await searchPidService(req.body);
  if (searchPID === false) {
    return res.status(404).json({ message: 'Product not found' });
  } return res.status(201).json({
    id: searchPID.id,
    itemsSold: searchPID.results,
  });
};

const allSalesControl = async (req, res) => {
  const itemsSale = await allSalesService();
  return res.status(200).json(itemsSale);
};

const oneSaleControl = async (req, res) => {
  const oneSale = await oneSaleService(req.params.id);
  if (oneSale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  } return res.status(200).json(oneSale);
};

module.exports = { salesRegisterControl, allSalesControl, oneSaleControl };