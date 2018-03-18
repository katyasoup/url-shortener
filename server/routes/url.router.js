const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// add URL object to database
router.post('/addUrl', (req, res) => {
    var saveUrl = {
      longUrl: req.body.longUrl,
      shortUrl: req.body.shortUrl,
      owner: req.user.id
    }
    console.log('new URL:', saveUrl);

    pool.query('INSERT INTO urls (longurl, shorturl, owner_id) VALUES ($1, $2, $3)',
      [saveUrl.longUrl, saveUrl.shortUrl, saveUrl.owner], (err, result) => {
        if (err) {
          console.log("Error inserting data: ", err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  })
  
  // get URL objects from database by user
  router.get('/seeUrls/:id', (req, res) => {
    pool.query('SELECT * FROM urls WHERE owner_id = $1',
    [req.params.id], (err, result) => {
      if (err) {
        console.log("Error retrieving data: ", err);
        res.sendStatus(500);
      } else {
        res.send(result.rows)
        
      } 
    });
  })
  
  module.exports = router;
  