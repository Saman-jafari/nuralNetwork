var express = require('express');
var router = express.Router();
var nural = require('../src/neuralNetwork/lineshit');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fuckOff: nural });
});

module.exports = router;
