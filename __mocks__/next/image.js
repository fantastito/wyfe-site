import React from 'react';

const Image = ({ objectFit, priority, ...props }) => {
  // Handle `objectFit` and `priority` to avoid React warnings
  return <img style={{ objectFit }} {...props} />;
};

export default Image;
