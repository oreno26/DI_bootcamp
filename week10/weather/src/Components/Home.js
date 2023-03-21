import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";

const API_KEY = "UbNGiPb2ajqsQ53bED1c3gBIbrdwdL2V";
const Home = () => {
  const [cityKey, setCityKey] = useState(215854);
  const [fiveDay, setFiveDay] = useState([]);
  const [head, setHead] = useState("");
  const [city, setCity] = useState("");
  const [isMetric, setIsMetric] = useState(true);
  const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const changeUnit = () => {
    isMetric == true ? setIsMetric(false) : setIsMetric(true);
    console.log(isMetric);
  };

  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${isMetric}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setFiveDay(data.DailyForecasts);
          setHead(data.Headline.Text);
        },
        fetch(
          `http://dataservice.accuweather.com/locations/v1/${cityKey}?apikey=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => setCity(data.LocalizedName))
      );
  }, [isMetric]);

  return (
    <>
      <h2>Select City</h2>
      <Search API={API_KEY}/>
      <button>Add to Favorites</button>
      <button onClick={changeUnit}>Change Unit</button>
      <div
        style={{
          border: "0.8rem double red",
          display: "inline-block",
          padding: "10px",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <CurrentWeather cityKey={cityKey} API={API_KEY} isMetric={isMetric} />
        <h3>{head}</h3>

        {fiveDay.map((elem, i) => {
          let day = new Date(elem.Date);

          return (
            <div
              key={i}
              style={{
                border: "0.5rem double crimson",
                width: "15vw",
                height: "auto",
                display: "inline-block",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <p>
                <p style={{ fontWeight: "bold" }}>{dayArr[day.getDay()]}</p>{" "}
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    elem.Day.Icon > 9 ? elem.Day.Icon : "0" + elem.Day.Icon
                  }-s.png`}
                />
                Max: {elem.Temperature.Maximum.Value}{" "}
                {elem.Temperature.Maximum.Unit}
              </p>
              <p>
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    elem.Night.Icon > 9
                      ? elem.Night.Icon
                      : "0" + elem.Night.Icon
                  }-s.png`}
                />
                Min: {elem.Temperature.Minimum.Value}{" "}
                {elem.Temperature.Minimum.Unit}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
