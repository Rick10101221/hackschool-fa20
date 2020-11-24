const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');

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

// Connecting MongoDB database
mongoose.connect(config.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB database');
}, (err) => {
  console.log(`Not connected to MongoDB database: ${err}`);
})

// Server Setup
server.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});