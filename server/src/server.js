const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const app = require('./app');
const { mongoConnect } = require('./utils/mongo');
const feeds = require('./models/feed/feed.mongo');

const PORT = process.env.PORT || 3001;
/** Self signed cert expires 7/23/2022 */
const server = https.createServer(
  {
    key: fs.readFileSync(path.resolve('./src/key.pem')),
    cert: fs.readFileSync(path.resolve('./src/cert.pem')),
  },
  app
);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
