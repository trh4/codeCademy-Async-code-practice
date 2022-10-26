const { rejects } = require("assert");
const fs = require("fs");

(function way1() {
  // use readfile and callback fucntions
  let text1;
  fs.readFile("./text1.txt", "utf-8", (err, text) => {
    text1 = text;
    fs.readFile("./text2.txt", "utf-8", (err, text) => {
      console.log(text1 + " AND " + text);
    });
  });
  console.log(text1); // gonna be undefined cus readfile is asynchronous, and sync is before any async
});

function readFilePromise(path, encode) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encode, (err, text) => {
      err ? reject(err.message) : resolve(text);
    });
  });
}
(function way2() {
  //use native promises and nesting promises
  let text1, text2;
  readFilePromise("./text1.txt", "utf8")
    .then((text) => {
      text1 = text;
      return readFilePromise("./text2.txt", "utf8"); // nesting promises
    })
    .then((text) => {
      text2 = text;
      return text1 + " and " + text2;
    })
    .then((ans) => console.log(ans));
});
(async function way3() {
    let text1= await readFilePromise('./text1.txt','utf8')
    let text2= await readFilePromise('./text2.txt','utf8')
    console.log(text1+" AND "+text2)
})();
