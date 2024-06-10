var express = require('express');
var router = express.Router();
const sections = require('../public/json/chapterStructure.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Naval Totd', sections });
});

module.exports = router;

