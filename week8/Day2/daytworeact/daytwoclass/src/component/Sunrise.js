import React from "react";

class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "Israel",
      city: "Tel Aviv",
    };
  }
  componentDidMount() {
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ hourSunrise: res.results.sunrise, by: "oren" })
      )
      .catch((err) => {
     console.log(err);;
      });
  }
  render(){
    let {country, city ,hourSunrise ,by} = this.state
    return(   
        <>
        <h1> In {country} the sunrise will be at {hourSunrise}</h1>
        <p>It {city} this was made by {by} </p>
        </>
    )
  }
}

export default Sunrise;
