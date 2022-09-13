const valueQuant = (req, res, next) => {
  const list = req.body;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].quantity <= 0) {
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  }
  next();
};

module.exports = valueQuant;