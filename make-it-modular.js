const myModule = require("./mymodule");
const path = process.argv[2];
const fileExtension = process.argv[3];

myModule(path, fileExtension, (err, data) => {
  if (err) {
    return console.log(err);
  }

  data.forEach((file) => {
    console.log(file);
  });
});
