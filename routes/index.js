'use strict';

const express = require('express');
const router = express.Router();

var indexController = require('../controllers/indexController');

router.get('/', indexController.index);

module.exports = router;