const express = require('express');
const { salesRegisterControl } = require('../controllers/salesControl');
const existencePId = require('../middlewares/existencePId');
const existenceQuant = require('../middlewares/existenceQuant');
const valueQuant = require('../middlewares/valueQuant');
const searchPId = require('../middlewares/searchPId');

const router = express.Router();

router.post('/',
  existencePId,
  existenceQuant,
  valueQuant,
  searchPId,
  salesRegisterControl);

module.exports = router;