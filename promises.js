function printAns(ans) {
  console.log(ans);
}
(function ex0() {
  console.log("ex0:");
  let executorFunction = (resolve, reject) => {
    console.log("promise running");
    false ? resolve("i resolved") : reject("i rejected");
  };
  const myFirstPromise = new Promise(executorFunction);
  myFirstPromise
    .then((ans) => console.log(ans))
    .catch((ans) => console.log(ans));
});
(function ex1() {
  console.log("ex1:");
  const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344,
  };
  function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
      resolve("Sunglasses order processed.");
    } else {
      reject("That item is sold out.");
    }
  }
  function orderSunglasses() {
    return new Promise(myExecutor);
  }
  let orderPromise = orderSunglasses();
  console.log(orderPromise);
  orderPromise
    .then((resolve) => console.log(resolve))
    .catch((reason) => console.log(reason));
});
const ex2 = () => {
  console.log("first line");
  setTimeout(() => console.log("delayed print"), 5000);
  console.log("last line");
};
(function ex2_1() {
  console.log("first line");
  function delayedExecutor(res, rej) {
    setTimeout(() => res("delayed resolved"), 3000);
  }
  const prom = new Promise(delayedExecutor);
  prom.then((ans) => console.log(ans));
  console.log(prom);
  console.log("last line");
});

(function ex3() {
  console.log("ex3: promises composition(chaining promises)");
  let inventory = {
    beer: 10,
    books: 10,
  };
  const checkBeer = new Promise((res, rej) => {
    inventory.beer > 0 ? res() : rej("no more beer!");
  });
  function checkBooks() {
    return new Promise((resolve, reject) => {
      inventory.books > 0
        ? resolve("there is beer AND books ORDERED!")
        : reject("no more books!");
    });
  }
  (function buyBeerAndBook() {
    checkBeer.then(checkBooks).then(printAns).catch(printAns);
  })();
});

(function ex4() {
  // promises outside functions execude immidietly!!
  console.log("ex4: promise.all");
  function cleanFloor() {
    console.log("cleaning floor");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("floor resolved to clean");
      }, 3000);
    });
  }
  function cleanRoom() {
    console.log("cleaning Room");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Room resolved to clean");
      }, 3000);
    });
  }
  const cleanHomeTogether = () => {
    console.log("cleaning home together :}");
    Promise.all([cleanRoom(), cleanFloor()]).then(printAns);
  };
  const cleanHomeAlone = () => {
    console.log("cleaning home alone ");
    cleanFloor().then(printAns).then(cleanRoom).then(printAns);
  };
  // cleanHomeTogether()
  // cleanHomeAlone();
});

(function tryme() {
  console.log("dsds");
  let prom = new Promise((res) => {
    res("hey");
  });

  console.log(prom.then(printAns).then(printAns).then(printAns));
})();
