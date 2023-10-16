const { API_KEY } = require("../information/APIKEY");
let motivationJson;
const header = {
  "X-Api-Key": API_KEY,
};
const motivation = fetch(
  "https://api.api-ninjas.com/v1/quotes?category=inspirational",
  {
    headers: header,
  }
);
motivation
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    // response.forEach((element) => {
    //   console.log(element.quote);
    // });
  });
