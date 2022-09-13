const existenceQuant = (req, res, next) => {
  const list = req.body;
  for (let i = 0; i < list.length; i += 1) {
    if (!list[i].quantity && list[i].quantity !== 0) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  }
  next();
};

module.exports = existenceQuant;