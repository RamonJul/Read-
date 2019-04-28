import React from "react";

function Col(props) {
  let size;
  if(props.size){
  size = props.size.split(" ").map(size => "col-" + size).join(" ");
  }

  return <div className={size} {...props} />;
}

export default Col;
