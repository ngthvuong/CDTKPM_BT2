const express = require('express');
const analysisController = require('@controllers/analysisController');

const router = express.Router();
router.get('/', analysisController.index);

module.exports = router;
