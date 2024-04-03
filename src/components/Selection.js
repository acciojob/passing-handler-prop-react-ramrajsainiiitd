import React, { useState } from 'react'


export default function Selection(props) {

  const[color, setColor] = useState({});

  function handleClick() {
    setColor(props.applyColor());
  }
  return (
    <div className ='fix-box' style={color} onClick={handleClick}>
        Selection
    </div>
  )
}
