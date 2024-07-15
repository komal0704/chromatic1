
import React from 'react';

const Button = ({ label, primary }) => {
  const style = {
    backgroundColor: primary ? 'blue' : 'red',
    color: 'yellow',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
  };

  return <button style={style}>{label}</button>;
};

export default Button;

