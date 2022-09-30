const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in router GET');
  pool.query(`SELECT * FROM favorite;`).then ((result) => {
    console.log('result.rows is:', result.rows)
    res.send(result.rows);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('req.body POST', req.body)
  const sqlText = `INSERT INTO "favorite" ("url")
                    VALUES ($1)
                    AND
                    INSERT INTO "category" ("name")
                    VALUES ($2);`
  pool.query(sqlText, [req.body.url, req.body.category]).then ((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error)
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
