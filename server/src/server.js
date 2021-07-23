const http = require('http');
require('dotenv').config();
const app = require('./app');
const { mongoConnect } = require('./utils/mongo');
const { insertTempData } = require('./models/feeds/feeds.model');

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await insertTempData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
