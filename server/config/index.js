const dotenv = require('dotenv');
// Loads environmental variables 
// from .env into app
dotenv.config();
const config = {
  PORT: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
}
module.exports = config;