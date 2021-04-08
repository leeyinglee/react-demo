import { useRef, useEffect, useState } from 'react';

const useSlider = (count) => {
  const lastData = useRef({
    cur: 1,
    translate: 0,
    width: 0,
    cWidth: 0,
    transition: '',
  });
  const dom = useRef(null);
  const [, forceUpdate] = useState(null);

  useEffect(() => {
    const box = dom.current;
    const cWidth = box.clientWidth;
    const width = cWidth * count;

    // const init = () => {
    //   lastData.current.cWidth = cWidth;
    //   lastData.current.width = width;
    //   forceUpdate({
    //     cWidth,
    //     width,
    //   });
    // };

    // init();

    const initInfinit = () => {
      lastData.current.cWidth = cWidth;
      lastData.current.width = width;
      lastData.current.translate = -cWidth;
      forceUpdate({
        cWidth,
        width,
      });
    };

    initInfinit();

    const handleNextInfinit = () => {
      let { cur, translate } = lastData.current;
      lastData.current.translate = translate;
      if (cur === count) {
        setTimeout(() => {
          cur = 1;
          translate = -cWidth;
          lastData.current.cur = cur;
          lastData.current.translate = -cWidth;
          lastData.current.transition = 'none';
          forceUpdate({
            cur,
            translate,
          });
        }, 501);
      }
      cur += 1;
      translate = -cur * cWidth;
      lastData.current.cur = cur;
      lastData.current.translate = translate;
      lastData.current.transition = 'all 500ms ease';
      forceUpdate({
        cur,
        translate,
      });
    };

    const handlePrevInfinit = () => {
      let { cur, translate } = lastData.current;
      if (cur === 1) {
        setTimeout(() => {
          cur = count;
          translate = -cWidth;
          lastData.current.cur = cur;
          lastData.current.translate = -cWidth * count;
          lastData.current.transition = 'none';
          forceUpdate({
            cur,
            translate,
          });
        }, 500);
      }
      cur -= 1;
      translate = -cur * cWidth;
      lastData.current.cur = cur;
      lastData.current.translate = translate;
      lastData.current.transition = 'all 500ms ease';
      forceUpdate({
        cur,
        translate,
      });
    };

    // const handleNext = () => {
    //   let { cur, translate } = lastData.current;
    //   if (cur === count) return;
    //   cur += 1;
    //   translate = -(cur - 1) * cWidth;
    //   lastData.current.cur = cur;
    //   lastData.current.translate = translate;
    //   forceUpdate({
    //     cur,
    //     translate,
    //   });
    // };

    // const handlePrev = () => {
    //   let { cur, translate } = lastData.current;
    //   if (cur === 1) return;
    //   cur -= 1;
    //   translate = -(cur - 1) * cWidth;
    //   lastData.current.cur = cur;
    //   lastData.current.translate = translate;
    //   forceUpdate({
    //     cur,
    //     translate,
    //   });
    // };
    box.childNodes[0].addEventListener('click', handlePrevInfinit, false);
    box.childNodes[2].addEventListener('click', handleNextInfinit, false);

    return () => {
      box.childNodes[0].removeEventListener('click', handlePrevInfinit, false);
      box.childNodes[2].removeEventListener('click', handleNextInfinit, false);
    };
  }, [count]);

  return [
    {
      current: lastData.current.cur,
      with: lastData.current.width,
      translate: lastData.current.translate,
      transition: lastData.current.transition,
    },
    dom,
  ];
};

export default useSlider;
