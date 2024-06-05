const multiply = (a, b) => {
  return a * b;
};

const product = multiply(5, 8);

console.log(product);

const fs = require("fs");

fs.writeFile("./hello.txt", "hello, friend", () => {
  console.log("done creating file");
});

const validator = require("validator");

const myModule = require("myModule");

const myFunction = () => {
  console.log("Send me anywhere, I'm ready!");
};

module.exports = myFunction;

console.log(validator.isEmail("test@example.com"));
console.log(validator.isEmail("notanemail"));
console.log(validator.isUppercase("HI THERE"));
