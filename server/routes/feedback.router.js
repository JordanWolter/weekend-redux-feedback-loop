const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/feedback');
    pool.query(`SELECT *
    FROM "feedback";`
    ).then((result) => {

        res.send(result.rows);

    }).catch((error) => {

        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);

    });
});

router.post('/', (req, res) => {
    console.log('POST /api/feedback');

    console.log('req.body', req.body);

    pool.query(`INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`);

})
module.exports = router;