import React from 'react';
import './styles.scss';

const SkyWait = () => (
  <div className="sky-wait-container" style={{ position: 'relative', height: '50px', width: '50px' }}>
    <div className="sky-wait-mask sky-wait-mask-loading-blocking">
      <div className="sky-wait">
        <div className="sky-wait-double-bounce1" />
        <div className="sky-wait-double-bounce2" />
      </div>
    </div>
  </div>
);

export default SkyWait;
