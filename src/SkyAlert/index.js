import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SkyAlert = ({
  alertType, closeable, closed, children, onClose,
}) => {
  if (closed) return null;

  return (
    <div
      className={`sky-alert sky-rounded-corners sky-alert-${alertType}${closeable ? ' sky-alert-closable' : ''}`}
      role="alert"
    >
      <div className="sky-alert-content">
        {children}
      </div>
      {closeable && (
        <button
          className="sky-alert-close"
          type="button"
          aria-label="Close the alert"
          onClick={onClose}
        >
          <i className="fa sky-icon fa-close" />
        </button>
      )}
    </div>
  );
};

SkyAlert.propTypes = {
  alertType: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  closeable: PropTypes.bool,
  closed: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

SkyAlert.defaultProps = {
  alertType: 'warning',
  closeable: false,
  closed: false,
  onClose: undefined,
  children: null,
};

export default SkyAlert;
