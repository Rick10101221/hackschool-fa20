const dotenv = require('dotenv');
// Loads environmental variables 
// from .env into app
dotenv.config();
const config = {
  PORT: process.env.PORT,
}
module.exports = config;