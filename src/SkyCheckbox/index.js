import React from 'react';
import PropTypes from 'prop-types';

const SkyCheckbox = ({
  checked, onChange, name, label, onClick,
}) => (
  <label className="sky-checkbox-wrapper sky-switch">
    <input
      className="sky-switch-input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      name={name}
      onClick={onClick}
    />
    <span className="sky-switch-control sky-rounded-corners sky-switch-control-info">
      {checked && (
        <i className="fa sky-icon fa-check fa-fw" />
      )}
    </span>
    {label}
  </label>
);

SkyCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};

SkyCheckbox.defaultProps = {
  checked: false,
  onChange: () => {},
  onClick: () => {},
  name: null,
  label: null,
};

export default SkyCheckbox;
