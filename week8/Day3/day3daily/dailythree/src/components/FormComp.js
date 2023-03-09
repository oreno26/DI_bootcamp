import React from "react";

class FormComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstname, lastname, age, gender, destination, nuts, pizza, meat } =
      this.props.form;
    return (
      <div style={{backgroundColor:'blue',color:'red'}}>
        <p>
          your name: {firstname} {lastname}
        </p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
        <p>destination: {destination}</p>
        <ul>
          diet
          <li>nuts: {nuts ? "no" : "yes"}</li>
          <li>pizza: {pizza ? "yes" : "no"}</li>
          <li>meat: {meat ? "yes" : "no"}</li>
        </ul>
      </div>
    );
  }
}

export default FormComp;
