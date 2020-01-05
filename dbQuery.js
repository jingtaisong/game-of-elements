const {Pool} = require('pg');
const pool = new Pool({
    host: 'game-of-elements-db-instance.ct6nkwyja7yv.us-east-2.rds.amazonaws.com',
    user: 'postgres',
    password: 'Dirichlet1805',
    // don't need above lines if develop locally; they are for AWS only
    database: 'game_of_elements'
});

module.exports = {
    pool
}