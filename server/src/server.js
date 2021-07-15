const http = require('http');
require('dotenv').config();
const app = require('./app')

const PORT = process.env.PORT || 3001;
const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
