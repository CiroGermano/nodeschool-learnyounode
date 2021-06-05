const http = require("http");

const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    return response("method different from GET", "utf8");
  }

  const myUrl = new URL(request.url, `http://${request.headers.host}`);
  const aIsoDate = new Date(myUrl.searchParams.get("iso"));
  let dateObj;

  if (myUrl.pathname.includes("/api/parsetime")) {
    dateObj = {
      hour: aIsoDate.getHours(),
      minute: aIsoDate.getMinutes(),
      second: aIsoDate.getSeconds(),
    };
  } else if (myUrl.pathname.includes("/api/unixtime")) {
    dateObj = {
      unixtime: aIsoDate.getTime(),
    };
  }

  response.writeHead("200", { "Content-Type": "application/json" });
  response.end(JSON.stringify(dateObj));
});

server.listen(port);