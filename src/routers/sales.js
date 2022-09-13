const express = require('express');
const { salesRegisterControl } = require('../controllers/salesControl');
const existencePId = require('../middlewares/existencePId');
const existenceQuant = require('../middlewares/existenceQuant');
const valueQuant = require('../middlewares/valueQuant');

const router = express.Router();

router.post('/',
  existencePId,
  existenceQuant,
  valueQuant,
  salesRegisterControl);

module.exports = router;