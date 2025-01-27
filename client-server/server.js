import http from "http";

const server = http.createServer((req, resp) => {
  //   console.log("request made");
  console.log(req.url, req.method, req.statusCode);

  resp.setHeader("Content-Type", "text/html"); // Response header
  resp.write("<h1>Hello, Thang!</h1>"); // Response body
  resp.end(); // End of response
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000 ...");
});
