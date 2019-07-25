const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('error in Server GET', error);
      res.sendStatus(500);
    })

});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const updateFavorite = req.body;

  const queryText = `
        UPDATE favorites
        SET url = $1,
        category_id = $2
        WHERE id=$3;
        `;

  const queryValues = [
    updateFavorite.url,
    updateFavorite.category_id,
    updateFavorite.id,
  ]

  pool.query(queryText, queryValues)
    .then((response) => { res.sendStatus(200);})
    .catch((error) =>{
      console.log('Error completing UPDATE giphy query', error);
      res.sendStatus(500);
    })
  // req.body should contain a category_id to add to this favorite image
  
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
