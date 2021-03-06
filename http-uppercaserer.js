const http = require("http");
const map = require("through2-map");

const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method !== "POST") {
    return response.end("method different from POST", "utf8");
  }

  request
    .pipe(
      map(chunk => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(Number(port));
