const express = require('express');
const {pool} = require('./dbQuery');
const errorhandler = require('errorhandler');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// direct to build
app.use(express.static(path.join(__dirname, 'build')));

// direct via index.html always, which then redirects by router
if(process.env.NODE_ENV === 'production') {
    app.get('/*', function (req, res) {
         res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }


app.use(errorhandler());
app.use(cors());
app.use(bodyParser.json());

app.post('/savePlayer', async (req, res, next) => {
    try{
        const params = [req.body.name];

        const existenceQuery = 'SELECT count(1) FROM players WHERE player_name = $1';
        const insertQuery = 'INSERT INTO players (player_name) VALUES ($1)';

        const {rows} = await pool.query(existenceQuery, params);
        if (rows[0].count === "0") {
            const insertResult = await pool.query(insertQuery, params);
            return res.json(insertResult);
        } else {
            return res.json(rows);
        }
    } catch (err) {
        return next(err);
    }
});

app.post('/saveScore', (req, res, next) => {

    const query = 'INSERT INTO scores (player_name, player_id, score, finish_time, save_time) SELECT player_name, player_id, $1, $2, $3 FROM players WHERE player_name = $4';
    console.log(`req is ${req}; body is ${JSON.stringify(req.body)}`);
    const currentTime = new Date();
    const params = [req.body.score, req.body.finish_time, currentTime, req.body.name];
    console.log(`making PostgreSQL query ${query} with params ${params}`);

    pool.query(query, params, (q_err, q_res) => {
        if(q_err) {
            next(q_err);
        } else {
            console.log(q_res);
            res.json(q_res);
        }
    });
});

app.get('/getTopPlayers', (req, res, next) => {
    const top = req.query.top;
    const query = 'SELECT player_name, score, finish_time FROM scores ORDER BY score DESC LIMIT $1';
    const params = [top];
    console.log(`making query ${query}`);
    pool.query(query, params, (q_err, q_res) => {
        if(q_err) {
            next(q_err);
        } else {
            console.log(q_res.rows);
            res.send(q_res.rows);
        }
    });
});

const PORT = 4001;
app.listen(PORT, () => {
    console.log('The express server is running on port ' + PORT);
})