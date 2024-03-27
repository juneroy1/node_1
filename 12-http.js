const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url == "/") {
    // res.write("welcome to our home1 page");
    res.end("welcome to our home1 page");
    return;
  }

  if (req.url == "/about") {
    // res.write("welcome to our about page");
    res.end("welcome to our about page");
    return;
  }

  res.end("error page");
  return;
});

server.listen(8002);
