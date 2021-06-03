const fs = require('fs');

const bufferedFile = fs.readFileSync(process.argv[2]);
const splitedFile = bufferedFile.toString().split('\n');
const countNewLines = Number(splitedFile.length - 1);
console.log(countNewLines);
