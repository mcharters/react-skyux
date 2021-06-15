import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const SkyFluidGrid = ({ children, ...otherProps }) => (
  <div className="sky-fluid-grid" {...otherProps}>
    {children}
  </div>
);

SkyFluidGrid.propTypes = {
  children: PropTypes.node,
};

SkyFluidGrid.defaultProps = {
  children: null,
};

export const SkyRow = ({ children }) => (
  <div className="sky-row">
    {children}
  </div>
);

SkyRow.propTypes = {
  children: PropTypes.node,
};

SkyRow.defaultProps = {
  children: null,
};

export const SkyColumn = ({
  xs, sm, md, lg, children,
}) => {
  let className = 'sky-column';
  if (xs) className += ` sky-column-xs-${xs}`;
  if (sm) className += ` sky-column-sm-${sm}`;
  if (md) className += ` sky-column-md-${md}`;
  if (lg) className += ` sky-column-lg-${lg}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

SkyColumn.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  children: PropTypes.node,
};

SkyColumn.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  children: null,
};
