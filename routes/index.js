const express = require('express'),
 router = express.Router(),
 booksDB = require('../models/bookModel');

router.get('/', async function(req, res) {
  const booksData = await booksDB.getAllBooks();

  res.render('template', {
    locals: {
      title: 'Books', 
      booksData: booksData
      },
    partials: {
      partial: 'partial-index'
      }
  });
});

module.exports = router;
