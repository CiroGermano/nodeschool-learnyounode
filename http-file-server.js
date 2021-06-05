const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const pathFile = process.argv[3];

  fs.createReadStream(pathFile).pipe(response);
});

const port = process.argv[2];
server.listen(port);
