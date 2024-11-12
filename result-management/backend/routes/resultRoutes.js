const express = require('express');
const Result = require('../models/Result');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const results = await Result.find({ studentID: req.params.id });
  res.json(results);
});

module.exports = router;
