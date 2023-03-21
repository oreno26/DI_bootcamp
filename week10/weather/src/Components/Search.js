import { useState, useEffect } from "react";

const Search = (props) => {
  const [city, setCity] = useState("Tel Aviv");

  useEffect(() => {
    
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${props.API}&q=${city}`)
      .then(res => res.json())
      .then((data) => {console.log(data)});
  }, [city]);

  const check = (e) => {
    setTimeout(() => setCity(e.target.value), 1000);
    console.log(city);
  };

  return (
    <>
      <input
        onChange={check}
        style={{ width: "20vw", border: "2px black solid" }}
        type="text"
      />
      {city}
    </>
  );
};

export default Search;
