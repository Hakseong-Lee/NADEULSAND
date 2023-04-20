import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<any>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useThrottle = (callback: () => void, delay: number) => {
  let timer = useRef<boolean>(false);
  return function () {
    console.log('click');
    if (timer.current) return;
    if (!timer.current) {
      console.log('change');
      callback();
      timer.current = true;
      setTimeout(() => {
        timer.current = false;
      }, delay);
    }
  };
};
export const useDebounce = (callback: () => void, delay: number) => {
  let timer: any;
  return function () {
    console.log('click');
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('change');
      timer = null;
      callback();
    }, delay);
  };
};
