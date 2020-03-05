const options = {
    host: 'drona.db.elephantsql.com',
    user: 'wgnqysjn',
    password: 'oUAeEXNZcdX8-wJL_qxRh2i031SMh_7h',
    database: 'wgnqysjn'
}

const pgp = require('pg-promise')({
    query: function(e){
        console.log('query: ', e.query);
    }
})

const db = pgp(options);

module.exports = db;