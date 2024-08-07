
import React, { useState } from "react";
const Selection = (props) => {
  const [color, setColor] = useState('');


  function selectColor() {
    props.applyColor(setColor);
    setColor(props.config)
  }

  let style = {
    backgroundColor: color,
    width: "200px",
    height: "300px",
    display: "flex",
    border: "1px solid white",
    justifyContent: "center",
    fontSize: "20px",
    color: "white"
  }
  return (

    <div id="main" onClick={selectColor} style={style} className="fix-box" data-testid={color}>

      <p>{props.keys}</p>

    </div>)

}
export default Selection;