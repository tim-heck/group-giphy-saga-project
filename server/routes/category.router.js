const express = require('express');
const pool = require('../modules/pool');
const Axios = require ( 'axios' );

const router = express.Router();
require( 'dontenv' ).config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM category ORDER BY name ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

 
 
router.get('/', (req, res) => {
  Axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}`)
      .then(response => {
          console.log('Back from Giphy');
          resizeBy.send(response.data);
      }) 
      .catch(error => {
          res.sendStatus(500);
          console.log('Error from GIPHY', error);
      })
    })
      

module.exports = router;
