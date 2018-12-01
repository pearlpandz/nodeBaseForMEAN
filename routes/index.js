// For routing
const express = require('express');
const router = express.Router();

// Controllers
const array = require('./../controllers/index');

// API Call
router.use('/test', array.testFunction);


module.exports = router;