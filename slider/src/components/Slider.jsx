import React from 'react';

import useSlider from '@/hooks/useSlider';

import './Slider.less';

const Slider = (props) => {
  const { page, children } = props;
  const [{ translate, width, transition }, sliderRef] = useSlider(page);

  return (
    <div className="Slider-item" ref={sliderRef}>
      <div className={`Slider-prev ${page > 1 ? 'visible' : ''}`} data-char="‹"></div>
      <div className="Slider-wrapper">
        <div
          className="Slider-inner"
          style={{ width: `${width}px`, transform: `translateX(${translate}px)`, transition }}
        >
          {children}
        </div>
      </div>
      <div className={`Slider-next ${page > 1 ? 'visible' : ''}`} data-char="›"></div>
    </div>
  );
};

export default React.memo(Slider);
