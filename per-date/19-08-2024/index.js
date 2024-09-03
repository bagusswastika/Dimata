// let janji = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("Done"), 1000);
// });

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Dad Joke: ${data.joke}`);
    })
    .catch((error) => {
      console.log("Error fetching dad joke:", error);
    });
}

fetchDadJoke();
