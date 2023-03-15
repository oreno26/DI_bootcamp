import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { points, title, tag } = this.props.list;
    return (
      <div
        style={{
          margin: "15px",
          border: "7px double red",
          width: "150px",
          borderRadius: "20px",
        }}
      >
        <div>
          {points} {title} {tag}
        </div>
      </div>
    );
  }
}

export default Card;
