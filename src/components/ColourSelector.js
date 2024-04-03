import React, { useState } from 'react';

const ColourSelector = (props) => {
  function handleClick() {
    props.selectNextBackground({ background: props.config.background })
  }

  return (
    <button className={props.config.classname} onClick={handleClick}>
      {props.config.key}
    </button>
  )
}
export default ColourSelector;
