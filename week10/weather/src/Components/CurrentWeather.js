import { useState, useEffect } from "react";

const CurrentWeather = (props) => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("");
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState(0);

  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/${props.cityKey}?apikey=${props.API}`
    )
      .then((res) => res.json())
      .then((data) => setCity(data.LocalizedName))
      .catch((err) => console.log(err));
    fetch(`
        http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${props.cityKey}?apikey=${props.API}&metric=${props.isMetric}`)
      .then((res) => res.json())
      .then((data) =>{ 
        setUnit(data[0].Temperature.Unit)
          setTemp(data[0].Temperature.Value)
          setIcon(data[0].WeatherIcon)}
      );
  }, [props]);
  return (
    <div style={{border:'10px double red', width:'120px', borderRadius:'50px'}}>
      <div>{city}</div>
      <ul>
        <li>
          {temp} {unit}
        </li>
        <li><img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    icon > 9 ? icon : "0" + icon
                  }-s.png`}/></li>
      </ul>
      </div>
    
  );
};

export default CurrentWeather;
