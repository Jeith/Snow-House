var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});

module.exports = router;