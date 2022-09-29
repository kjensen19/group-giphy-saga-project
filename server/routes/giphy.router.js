const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get ('/', (req, res) => {
    console.log(req.body);
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&limit=20&tag=${req.body}`
    }).then((response) => {
        res.send(response.data.data)
    }).catch((error) => {
        console.log('GET gifs from giphy failed', error);
    });
});

module.exports = router;