import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Item = ({ children }) => (
  <div className="sky-toolbar-item">
    {children}
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = ({ children, viewActions }) => (
  <div className="sky-toolbar-section">
    <div className="sky-toolbar-items">
      {children}
    </div>
    {viewActions && (
      <div className="sky-toolbar-view-actions">
        {viewActions}
      </div>
    )}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  viewActions: PropTypes.node,
};

Section.defaultProps = {
  viewActions: null,
};

const SkyToolbar = ({ children, viewActions, sections }) => {
  if (sections) {
    return (
      <div className="sky-toolbar-container sky-toolbar-sectioned">
        {sections}
      </div>
    );
  }

  return (
    <div className="sky-toolbar-container">
      <div className="sky-toolbar-items">
        {children}
      </div>
      {viewActions && (
        <div className="sky-toolbar-view-actions">
          {viewActions}
        </div>
      )}
    </div>
  );
};

SkyToolbar.Item = Item;
SkyToolbar.Section = Section;

SkyToolbar.propTypes = {
  children: PropTypes.node,
  viewActions: PropTypes.node,
  sections: PropTypes.node,
};

SkyToolbar.defaultProps = {
  children: null,
  viewActions: null,
  sections: null,
};

export default SkyToolbar;
