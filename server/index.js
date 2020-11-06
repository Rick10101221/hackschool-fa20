const express = require('express')
const config = require('./config');
const cors = require('cors');
const router = require('./api');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ 
  extended: true 
}));


// const router = express.Router();
// const server = express();

// router.get('/pokemon', async (req, res) => {
//   res.status(200).json({ hello: 'world' });
// });

server.use('/api', router);


server.listen(config.port, () => {
  console.log(`Server started on port ${port}`)
})