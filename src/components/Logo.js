import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/farm2.png"
      width="80"
      {...props}
    />
  );
};

export default Logo;
