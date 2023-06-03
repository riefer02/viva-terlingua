import React from 'react';
import PropTypes from 'prop-types';

const sizeToTailwindClass = {
  xs: 'py-2 md:py-4 lg:py-8',
  sm: 'py-4 md:py-8 lg:py-12',
  md: 'py-8 md:py-12 lg:py-16',
  lg: 'py-12 md:py-16 lg:py-20',
};

export default function Spacer({ size }) {
  const spacingClass = sizeToTailwindClass[size] || '';

  return <div className={spacingClass}></div>;
}

Spacer.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

Spacer.defaultProps = {
  size: 'sm',
};
