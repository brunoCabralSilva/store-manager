const express = require('express');
const {
  allProductsService,
  oneProductService,
  registerProductService,
} = require('../services/productsService');

const router = express.Router();

router.get('/', allProductsService);
router.get('/:id', oneProductService);
router.post('/', registerProductService);

module.exports = router;