
import React from 'react';

const Button = ({ label, primary }) => {
  const style = {
    backgroundColor: primary ? 'blue' : 'red',
    color: 'pink',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor:'yellow'
    
  };

  return <button style={style}>{label} </button>;
};

export default Button;

