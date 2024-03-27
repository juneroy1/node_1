const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  console.log(first);

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        console.log("result", result);
      }
    );
  });
});

console.log("done with the task");
console.log("starting the next task");
