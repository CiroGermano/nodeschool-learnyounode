const http = require("http");

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, showDataFromUrl1);

function showDataFromUrl1(response) {
  let rawData = "";
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    console.log(rawData);
    http.get(url2, showDataFromUrl2);
  });
}

function showDataFromUrl2(response) {
  let rawData = "";
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    console.log(rawData);
    http.get(url3, showDataFromUrl3);
  });
}

function showDataFromUrl3(response) {
  let rawData = "";
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    console.log(rawData);
  });
}
