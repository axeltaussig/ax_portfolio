const axios = require("axios");

axios
  .get("https://api.api-ninjas.com/v1/babynames?gender=neutral", {
    headers: {
      "x-api-key": "A+Ncz8PzDeMNU8+IoLgv5A==MBYIfTL1vkeKCwdq",
    },
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
