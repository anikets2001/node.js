const fs = require("fs");

const type = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

if (type === "create") {
  fs.writeFileSync(fileName, content, { flag: "a" });
} else if (type === "remove") {
  fs.unlinkSync(fileName);
}else {
    console.log('invalid input');
}
