import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SkyModal extends React.PureComponent {
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const boundedHeightEl = this.modalEl.querySelector('.sky-modal');
    const fullPageModalEl = this.modalEl.querySelector('.sky-modal-full-page');
    /*
      Set modal height equal to max height of window (accounting for padding above and below modal)
    */
    const newHeight = window.innerHeight - 40;

    boundedHeightEl.style.maxHeight = `${newHeight.toString()}px`;
    if (fullPageModalEl) {
      fullPageModalEl.style.height = `${window.innerHeight.toString()}px`;
      fullPageModalEl.style.maxHeight = `${window.innerHeight.toString()}px`;
    } else {
      /*
        IE11 doesn't handle flex and max-height correctly so we have to explicitly add
        max-height to the content that accounts for standard header and footer height.
      */
      const modalContentEl = this.modalEl.querySelector('.sky-modal-content');
      const contentHeight = newHeight - 114;
      modalContentEl.style.maxHeight = `${contentHeight.toString()}px`;
    }
  }

  render() {
    const {
      size, header, onClose, children, footer,
    } = this.props;

    return (
      <div className="sky-modal-host-backdrop">
        <div className="sky-modal-dialog" ref={(div) => { this.modalEl = div; }}>
          <div className={`sky-modal sky-shadow sky-modal-${size}`}>
            <div className="sky-modal-header">
              <div className="sky-modal-header-content sky-emphasized">
                {header}
              </div>
              <div className="sky-modal-header-buttons">
                <button
                  type="button"
                  className="sky-btn sky-modal-btn-close"
                  onClick={onClose}
                >
                  <i className="fa sky-icon fa-close" />
                </button>
              </div>
            </div>
            <div className="sky-modal-content sky-padding-even-large">
              {children}
            </div>
            <div className="sky-modal-footer">
              <div className="sky-modal-footer-container sky-padding-even-large">
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SkyModal.propTypes = {
  size: PropTypes.string,
  header: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

SkyModal.defaultProps = {
  size: 'medium',
};

export default SkyModal;
