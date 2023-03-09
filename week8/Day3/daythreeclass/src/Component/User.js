import React from "react";

const User = (props) => {
    const Userstyle ={display:'inline-block',borderRadius:'25px',padding: '10px', margin: '20px', border:'1rem double red'}
  return (
    <div style={Userstyle}>
      <h4>{props.name}</h4>
      <p>{props.email }</p>
      <h5>{props.username}</h5>
    </div>
  );
};

export default User;
