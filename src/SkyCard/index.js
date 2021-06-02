import React from 'react';
import PropTypes from 'prop-types';
import SkyCheckbox from '../SkyCheckbox';
import './styles.scss';

const Content = ({ children }) => (
  <div className="sky-card-content sky-padding-even-default">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: undefined,
};

const Actions = ({ children }) => (
  <div className="sky-card-actions">
    <div>
      {children}
    </div>
  </div>
);

Actions.propTypes = {
  children: PropTypes.node,
};

Actions.defaultProps = {
  children: undefined,
};

const SkyCard = ({ selectable, selected, title, size, children, onSelectedChange }) => {
  let className = 'sky-card sky-shadow';
  if (size === 'small') {
    className += ' sky-card-small';
  }

  if (selectable) {
    className += ` sky-card-selectable${selected ? ' sky-card-selected' : ''}`;
  }

  const handleSelectedChange = (e) => {
    onSelectedChange(e.target.checked);
  }

  return (
    <section className={className}>
      <header>
        <div className="sky-card-header">
          <div className="sky-card-heading-middle">
            <h1 className="sky-card-title sky-section-heading">{title}</h1>
          </div>
          {selectable && (
            <div className="sky-card-check">
              <SkyCheckbox checked={selected} onChange={handleSelectedChange} />
            </div>
          )}
        </div>
      </header>
      {children}
    </section>
  );
};

SkyCard.propTypes = {
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  children: PropTypes.node,
  onSelectedChange: PropTypes.func,
  title: PropTypes.string,
};

SkyCard.defaultProps = {
  selectable: false,
  selected: false,
  size: 'large',
  children: null,
  onSelectedChange: () => {},
  title: null,
};

SkyCard.Content = Content;
SkyCard.Actions = Actions;

export default SkyCard;
