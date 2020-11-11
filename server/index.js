const express = require('express');
const server = express();
const cors = require('cors');
// For environmental variable access
const config = require('./config');
// Routers
const router = require('./api/index');
// Cors setup
server.use(express.urlencoded({
  extended: true
}));
server.use(express.json());
server.use(cors());
// Use each route defined above 
server.use('/api', router);
// Server Setup
server.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});




