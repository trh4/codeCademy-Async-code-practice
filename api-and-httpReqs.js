// there are 2 main categories of web APIs : browser API, 3rd party APIs
let lat, lon;
//browser api ex: geolocation
function geoFindMe() {
  const location = document.querySelector("#findLocation p");
  const successHandler = (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    location.innerHTML = lat + " " + lon;
  };
  const errorHandler = () => (location.textContent = "no location access");
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}
document
  .querySelector("#findLocation button")
  .addEventListener("click", geoFindMe);

//3rd party api ex: openweather :
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
async function findWheather() {
  const apiKey = "2b25532176218d2d0f6b6a1d71fc84ba";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric.json`;
  const wheather = document.querySelector("#wheather p");
  var response = await fetch(apiUrl);
  let data = await response.json();
  data = data.main;
  let curTemp = (data.temp - 273.15).toFixed(2);
  wheather.textContent = "temp here is " + curTemp;
}
document
  .querySelector("#wheather button")
  .addEventListener("click", findWheather);

// working with JSON ex: convert JSON-STRING to js-Object
(function ex1() {
  const jsonData =
    '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';
  let jsObject = JSON.parse(jsonData);
  // console.log(jsObject['parent']['children'])  //works too
  console.log(jsObject.parent.children);
});

//ex2: write a JSON-string from Js-Object
(function ex2() {
  const jsObject = {
    book: "JSON Primer",
    price: 29.99,
    inStock: true,
    rating: null,
  };
  const jsonDataString = JSON.stringify(jsObject);
  console.log(jsonDataString);
  console.log(jsObject);
})();
