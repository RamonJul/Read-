import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card card-category"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    > <div className="inside-card">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
