const {Pool} = require('pg');
const pool = new Pool({
    database: 'game_of_elements'
});

module.exports = {
    pool
}