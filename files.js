import fs from "fs";

// Reading files
// fs.readFile("./docs/hello.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// console.log("Reading files ..."); // This line will be executed before finish reading the file, because .readFile() is asynchronous (parallel)

// Writing to files
// fs.writeFile("./docs/hello.txt", "Hello World!", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Write to file successfully");
// });

// Appending to files
// fs.appendFile("./docs/hello.txt", "\nNew text to append", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Text appended successfully");
// });

// Directories
if (!fs.existsSync("./newDir")) {
  fs.mkdir("./newDir", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Folder created successfully");
  });
} else {
  fs.rmdir("./newDir", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
}

// Delete files
