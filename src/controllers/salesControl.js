const { searchPidService } = require('../services/salesService');

const salesRegisterControl = async (req, res) => {
  const searchPID = await searchPidService(req.body);
  if (searchPID === false) {
    return res.status(404).json({ message: 'Product not found' });
  } return res.status(201).json({
    id: searchPID.id,
    itemsSold: searchPID.results,
  });
};

module.exports = { salesRegisterControl };