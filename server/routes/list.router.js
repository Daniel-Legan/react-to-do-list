const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const SQLText = `SELECT * FROM list ORDER BY id ASC`;

  pool
    .query(SQLText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  const SQLText = `INSERT INTO list (description) VALUES ($1);`;

  pool
    .query(SQLText, [req.body.description])
    .then(() =>
      res.sendStatus(201)
    )
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
  const SQLText = `DELETE FROM list WHERE id = $1`;

  pool
    .query(SQLText, [req.params.id])
    .then(() =>
      res.sendStatus(201)
    )
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
  const SQLText = `UPDATE list SET description = $1 WHERE id = $2;`;

  pool
    .query(SQLText, [req.body.description, req.params.id])
    .then(() =>
      res.sendStatus(201)
    )
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})

module.exports = router;