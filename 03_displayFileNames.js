const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     `${dirPath}/hello${i}.txt`,
//     `This is ${i + 1}th file's content`
//   );
// }

fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.error("Error reading directory:", err);
    }
    files.forEach((file) => console.log(file));
  });
  