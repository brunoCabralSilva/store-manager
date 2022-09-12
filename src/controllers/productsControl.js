const express = require('express');
const { allProductsService, oneProductService } = require('../services/productsService');

const router = express.Router();

router.get('/', allProductsService);
router.get('/:id', oneProductService);

module.exports = router;