import http from "http";
import fs from "fs";

const server = http.createServer((req, resp) => {
  console.log(req.url, req.method, req.statusCode);

  resp.setHeader("Content-Type", "text/html"); // Response header

  let path = "./client-server/views/"; // "./" = project directory
  switch (req.url) {
    case "/":
      path += "index.html";
      resp.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      resp.statusCode = 200;
      break;
    case "/about-me":
      resp.statusCode = 301;
      resp.setHeader("Location", "/about");
      resp.end();
      break;
    default:
      resp.statusCode = 404;
      path += "error.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      resp.statusCode = 404;
      resp.end("<h1>404: Not found!</h1>");
      return;
    }
    resp.write(data);
    resp.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000 ...");
});
