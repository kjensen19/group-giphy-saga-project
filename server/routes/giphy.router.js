const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const api_key = process.env.API_KEY;

router.get ('/', (req, res) => {
    console.log(req.body);
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`
    }).then((response) => {
        console.log(response.data.data)
        res.send(response.data.data)
    }).catch((error) => {
        console.log('GET gifs from giphy failed', error);
    });
});

module.exports = router;

// &tag=${req.body}