const express = require('express');
const pool = require('../modules/pool');
const Axios = require ( 'axios' );

const router = express.Router();


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

 
 

      

module.exports = router;
