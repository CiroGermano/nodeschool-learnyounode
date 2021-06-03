const fs = require("fs");
const file = process.argv[2];

const callback = function (err, data) {
  if (err) {
    return console.error(err);
  }

  const countNewLine = Number(data.toString().split("\n").length - 1);
  console.log(countNewLine);
};

fs.readFile(process.argv[2], callback);
