const multiply = (a, b) => {
  return a * b;
};

const product = multiply(5, 8);

console.log(product);

const fs = require("fs ");

fs.writeFile("./hello.txt", "hello, friend", () => {
  console.log("done creating file");
});
