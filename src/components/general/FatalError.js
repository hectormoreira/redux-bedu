import React from "react";
import Error from "../../assets/images/404.png";

const FatalError = (props) => {
  return (
    <div className="center">
      <h2 className="red">{props.message}</h2>
      <img src={Error} alt="Error"/>
    </div>
  );
};

export default FatalError;
