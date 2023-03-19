import React from "react";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

const key = "AIzaSyBDxd9YlW02pkVVmo1THBSSQOQHz_prBxA";
const AnyReactComponent = () => (
  <div
    style={{
      borderRadius: "15px",
      border: "10px red solid",
      height: "5px",
      width: "5px",
      backgroundColor: "red",
    }}
  ></div>
);
const Map = ({ zoom }) => {
  const [lat, setLat] = useState(31.734);
  const [lng, setLng] = useState(35);
  useEffect(() => {
    const error = (err) => {
      console.log(err);
    };
    const success = (position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div style={{ height: "95vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
