const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const api_key = process.env.api_key;

router.get('/:searchTerm', (req, res) => {
    console.log(`req.params`, req.params);
    console.log(api_key);
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${req.params.searchTerm}&limit=10`
    }).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('GET /gifs from giphy failed in router', error);
    });
});

module.exports = router;

