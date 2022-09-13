const express = require('express');
const {
  allProductsControl,
  oneProductControl,
  registerProductControl,
} = require('../controllers/productsControl');

const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', allProductsControl);
router.get('/:id', oneProductControl);
router.post('/', validateName, registerProductControl);

module.exports = router;