const express = require('express');
const {
  salesRegisterControl,
  allSalesControl,
  oneSaleControl,
} = require('../controllers/salesControl');
const existencePId = require('../middlewares/existencePId');
const existenceQuant = require('../middlewares/existenceQuant');
const valueQuant = require('../middlewares/valueQuant');

const router = express.Router();

router.post('/',
  existencePId,
  existenceQuant,
  valueQuant,
  salesRegisterControl);

router.get('/', allSalesControl);
router.get('/:id', oneSaleControl);

module.exports = router;