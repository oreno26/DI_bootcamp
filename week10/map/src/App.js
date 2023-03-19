import React from "react";
import Map from "./components/Map";
import { useState, useEffect } from "react";

const App = () => {
  const zoom = 15;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Map</h1>
      <Map zoom={zoom} />
    </div>
  );
};

export default App;
