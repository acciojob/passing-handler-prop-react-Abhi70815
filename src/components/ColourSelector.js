import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  const {classname }= config;
  // console.log(props.className)
  // {console.log(background)}
  // let x=config;
  console.log(config.key)
  return (
    <button style={{backgroundColor:background}} className={classname} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
