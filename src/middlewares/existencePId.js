const existencePId = (req, res, next) => {
  const list = req.body;
  for (let i = 0; i < list.length; i += 1) {
    if (!list[i].productId || list[i].productId === '') {
      return res.status(400).json({ message: '"productId" is required' });
    }
  }
  next();
};

module.exports = existencePId;