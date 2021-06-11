import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Item = ({ name, onClick }) => (
  <div className="sky-dropdown-item">
    <button
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class SkyDropdown extends React.PureComponent {
  REGEXP_SCROLL_PARENT = /^(visible|hidden)/

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      top: 0,
      left: 0,
      inView: true,
    };
  }

  componentDidMount() {
    this.scrollParent = this.getScrollParent(this.container);
    this.scrollParent.addEventListener('scroll', this.positionPopover);

    window.addEventListener('resize', this.positionPopover);

    this.positionPopover();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.visible !== prevState.visible) {
      if (this.state.visible) {
        document.addEventListener('click', this.handleClose);
      } else {
        document.removeEventListener('click', this.handleClose);
      }
    }

    const { top, left, inView } = this.getPositionState();
    if (top !== prevState.top || left !== prevState.left || inView !== prevState.inView) {
      this.positionPopover();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.positionPopover);
    document.removeEventListener('click', this.handleClose);
    this.scrollParent.removeEventListener('scroll', this.positionPopover);
  }

  getScrollParent = (el) => {
    if (!(el instanceof HTMLElement) || typeof window.getComputedStyle !== 'function') {
      return null;
    }

    if (el.scrollHeight >= el.clientHeight && !this.REGEXP_SCROLL_PARENT.test(window.getComputedStyle(el).overflowY || 'visible')) {
      return el;
    }

    return this.getScrollParent(el.parentElement) || document.body;
  }

  handleExpandClick = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  }

  handleClose = () => {
    console.log('closing!');
    this.setState({ visible: false });
  }

  getPositionState = () => {
    const containerRect = this.container.getBoundingClientRect();
    const scrollRect = this.scrollParent.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();

    const percentageTopVisible = (popoverRect.top === 0)
      ? 100
      : popoverRect.top / scrollRect.top * 100;
    const percentageBottomVisible = (scrollRect.bottom === 0)
      ? 100
      : scrollRect.bottom / popoverRect.bottom * 100;

    return {
      top: containerRect.bottom,
      left: containerRect.left,
      inView: percentageTopVisible > 95 && percentageBottomVisible > 95,
    };
  }

  positionPopover = () => {
    const s = this.getPositionState();
    console.log('inView: ' + s.inView);
    this.setState(s);
  }

  render() {
    console.log('visible: ' + this.state.visible)
    const visible = this.state.visible && this.state.inView;

    const style = {
      top: this.state.top,
      left: this.state.left,
      opacity: visible ? 1 : 0,
    };

    if (visible) {
      style.visibility = 'visible';
      style.display = 'block';
    } else {
      style.display = 'none';
    }

    console.log(style);

    return (
      <div className="sky-dropdown" ref={(container) => { this.container = container; }}>
        <button
          type="button"
          className="sky-btn sky-dropdown-button sky-dropdown-button-type-context-menu sky-btn-default"
          onClick={this.handleExpandClick}
        >
          <div>
            <i className="fa sky-icon fa-ellipsis-h" />
          </div>
        </button>
        <div
          className="sky-popover-container sky-popover-alignment-left sky-popover-placement-below sky-popover-max-height"
          style={style}
          ref={(popover) => { this.popover = popover; }}
        >
          <div className="sky-popover sky-shadow sky-rounded-corners">
            <div className="sky-popover-body sky-padding-even-default">
              <div className="sky-dropdown-menu">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SkyDropdown.Item = Item;

SkyDropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkyDropdown;
