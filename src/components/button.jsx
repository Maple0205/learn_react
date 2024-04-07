import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const buttonSizes = {
  sm: { fontSize: '10px', padding: '4px 8px', borderRadius: '4px' },
  md: { fontSize: '20px', padding: '6px 12px', borderRadius: '8px'  },
  lg: { fontSize: '30px', padding: '8px 16px', borderRadius:  '12px' },
  xl: { fontSize: '40px', padding: '10px 20px', borderRadius: '15px'  },
};

const Button = ({ size, color, children, style: externalStyle, ...restProps }) => {
  const validSize = buttonSizes[size] ? size : 'md';
  const internalStyle = {
    ...buttonSizes[validSize],
    backgroundColor: color,
    cursor: 'pointer',
    border: 'none',
    color: 'white',
  }
  const combinedStyle = { ...internalStyle, ...externalStyle };

  return (
    <button {...restProps} style={combinedStyle}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'md',
  color: 'skyblue',
};

export default Button;
