'use strict';

const router = require('express').Router();

const showHome = function(req, res) {
  res.render('page/view-home.hbs');
}

router.get('/home', showHome);

module.exports = router;