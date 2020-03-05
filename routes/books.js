const express = require('express'),
 router = express.Router(),
 booksDB = require('../models/bookModel');



/* GET home page. */
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

router.get('/:id?', async function(req, res){
  const { id } = req.params;
  const bookData = await booksDB.getBook(id);
  const bookReviews = await booksDB.getReviews(id);

  res.render('template', {
    locals: {
      title: bookData[0].title,
      bookData: bookData,
      bookReviews: bookReviews
    },
    partials: {
      partial: 'partial-book'
    }
  });
});

router.post('/', async function(req, res){
  const { book_id, title_field, review_field } = req.body;
  const postBookReview  = await booksDB.postBookReview(book_id, title_field, review_field);

  res.sendStatus(200);
})

module.exports = router;
