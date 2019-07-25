const express = require('express');
const Axios = require('axios');
const router = express.Router();

require('dotenv').config();

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


router.post('/', (req, res) => {
    console.log(req.body.search);
    Axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${req.body.search}`)
        .then(response => {
            console.log('Back from Giphy');
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log('Error from GIPHY', error);
        })
})

module.exports = router;