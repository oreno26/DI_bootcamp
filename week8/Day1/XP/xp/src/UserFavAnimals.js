import React from "react";

const FavAnim = (props) => {
  console.log();

  return props.animal.map((elem) => <li>{elem}</li>);
};

export default FavAnim;
