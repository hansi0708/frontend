import React from "react";

const Horoscope = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.vedicastroapi.com/v3-json/horoscope/planet-details?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=484188d6-6472-5ce9-bb76-62988624458d&lang=en",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return <div>Horoscope</div>;
};

export default Horoscope;
