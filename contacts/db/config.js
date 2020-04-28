require('dotenv').config();
//const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@localhost:5432/contacts';

const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@lcontactsdb:5432/contactsdb';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }