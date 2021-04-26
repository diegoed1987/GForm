const { Pool } = require('pg')

const pool = new Pool({
    host:'localhost',
    user :'postgres', 
    password:'admin', 
    database:'postgres', 
    port:'5432'
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}