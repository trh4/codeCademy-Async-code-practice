(function ex1() {
  //async always return promise
  // if function returns value then its resolved(value)
  // if returns promise then forward him
  // if return nothing then its resolved()
  (async function resolvedPromise() {
    return new Promise((res) => res("resolved"));
  })().then((resolvedValue) => console.log(resolvedValue)); // Prints resolved

  (async function justFive() {
    return 5;
  })().then((resolvedValue) => console.log(resolvedValue)); // Prints 5

  (async function justUndefined() {
    return;
  })().then((resolvedValue) => console.log(resolvedValue)); // Prints undefined
  console.log("last line");
});

(async function summery() {
  let dontAWaitForFood = (() => {
    return new Promise((res) => {
      setTimeout(() => {
        res("food here!");
      }, 3000);
    });
  })();
  console.log(dontAWaitForFood);
  console.log("the foor still pending!!");

  let delayedGetFood = await (() => {
    return new Promise((res) => {
      setTimeout(() => {
        res("food here!");
      }, 3000);
    });
  })();
  console.log(delayedGetFood);
})();
