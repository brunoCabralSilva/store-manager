const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
    message: 'rodando products',
  }));

router.get('/:id', (req, res) => res.status(200).json({
    message: req.params.id,
  }));

router.get();

module.exports = router;