import React, { useState } from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  const {classname }= config;
  const [color,setColor]=useState('');
  // console.log(props.className)
  // {console.log(background)}
  // let x=config;
  console.log(config.key)
  return (
    <button style={{backgroundColor:background}} className={classname} onClick={() =>{ selectNextBackground({background: background}); setColor(props.config.label)}} data-testid={color}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
