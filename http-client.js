const http = require("http");

const url = process.argv[2];

http
  .get(url, (response) => {
    response.setEncoding("utf8");
    let rawData = "";
    response.on("data", (chunk) => {
      console.log(chunk);
      rawData += chunk;
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
