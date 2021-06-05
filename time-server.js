const net = require("net");

const port = process.argv[2];

const server = net.createServer((socket) => {
  const date = formatedDate();

  socket.end(date + "\n", "utf8");
});

function formatedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}-${month}-${day} ${hour}:${minute}`;
}

server.listen(port);
