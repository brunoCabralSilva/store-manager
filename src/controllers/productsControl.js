const express = require('express');
const {
  allProductsService,
  oneProductService,
  registerProductService,
} = require('../services/productsService');

const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', allProductsService);
router.get('/:id', oneProductService);
router.post('/', validateName, registerProductService);

module.exports = router;