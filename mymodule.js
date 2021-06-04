const fs = require("fs");
const path = require("path");

module.exports = function (directoryName, fileNameExtension, callback) {
  fs.readdir(directoryName, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFilesByExt = files.filter((file) =>
      path.extname(file).includes(fileNameExtension)
    );

    callback(null, filteredFilesByExt);
  });
};
