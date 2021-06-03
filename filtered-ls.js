const fs = require("fs");
const path = require("path");

const pathArg = process.argv[2];
const extArg = process.argv[3];

fs.readdir(pathArg, (err, files) => {
  const filteredFilesByExt = files.filter((file) =>
    path.extname(file).includes(extArg)
  );

  filteredFilesByExt.forEach((file) => {
    console.log(file);
  });
});
