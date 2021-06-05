const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
  let rawData = "";
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    console.log(Number(rawData.length));
    console.log(rawData);
  });
});
