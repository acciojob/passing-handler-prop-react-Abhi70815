import React, { useState } from 'react';
 
const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '' });
 
  return (
    <div 
      className="fix-box" 
      style={{...style, height: '100px', width: '100px'}}
      onClick={() => applyColor(setStyle)}
    >
    </div>
  );
};
 
export default Selection;