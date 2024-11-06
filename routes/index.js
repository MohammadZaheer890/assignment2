let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
