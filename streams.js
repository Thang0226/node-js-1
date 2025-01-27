import fs from "fs";

// Streams will read and write by buffer per buffer (64KB)
const readStream = fs.createReadStream("./docs/blog.txt");
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// readStream.on("data", (chunk) => {
//   // is called after each full buffer
//   console.log("----------- NEW CHUNK -----------");
//   console.log(chunk.toString());
//   writeStream.write("\n---------- NEW CHUNK ---------\n");
//   writeStream.write(chunk.toString());
// });

// Alternative shorthand: piping read stream & write stream
readStream.pipe(writeStream);
