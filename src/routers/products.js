const express = require('express');
const {
  allProductsControl,
  oneProductControl,
  registerProductControl,
  updateProductControl,
} = require('../controllers/productsControl');

const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', allProductsControl);
router.get('/:id', oneProductControl);
router.put('/:id', validateName, updateProductControl);
router.post('/', validateName, registerProductControl);

module.exports = router;