import React from 'react';
import PropTypes from 'prop-types';
import SkyCheckbox from '../SkyCheckbox';
import './styles.scss';

const Item = ({
  title, content, selectable, isSelected, onSelected, isExpanded, onExpanded, contextMenu,
}) => (
  <div className={`sky-repeater-item sky-padding-even-default${isSelected ? ' sky-repeater-item-selected' : ''}${onExpanded ? ' sky-repeater-item-collapsible' : ''}`}>
    <div className="sky-repeater-item-left">
      {selectable && (
        <div className="sky-repeater-item-checkbox">
          <SkyCheckbox checked={isSelected} onChange={onSelected} />
        </div>
      )}
      {contextMenu && (
        <div className="sky-repeater-item-context-menu">
          {contextMenu}
        </div>
      )}
    </div>
    <div className="sky-repeater-item-right">
      <header className="sky-repeater-item-header">
        <div className="sky-repeater-item-title sky-emphasized">
          {title}
        </div>
        {onExpanded ? (
          <div className="sky-repeater-item-chevron">
            <button
              className={`sky-chevron sky-chevron-${isExpanded ? 'up' : 'down'}`}
              type="button"
              onClick={onExpanded}
            >
              <i className="sky-chevron-part sky-chevron-left" />
              <i className="sky-chevron-part sky-chevron-right" />
            </button>
          </div>
        ) : null}
      </header>
      {content && (onExpanded === undefined || isExpanded) && (
        <div className="sky-repeater-item-content">
          {content}
        </div>
      )}
    </div>
  </div>
);

Item.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node,
  contextMenu: PropTypes.node,
  selectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelected: PropTypes.func,
  isExpanded: PropTypes.bool,
  onExpanded: PropTypes.func,
};

Item.defaultProps = {
  content: null,
  contextMenu: null,
  selectable: false,
  isSelected: false,
  onSelected: () => {},
  isExpanded: false,
  onExpanded: undefined,
};

const SkyRepeater = ({ children }) => (
  <div className="sky-repeater">
    {children}
  </div>
);

SkyRepeater.Item = Item;

SkyRepeater.propTypes = {
  children: PropTypes.arrayOf(Item).isRequired,
};

export default SkyRepeater;
