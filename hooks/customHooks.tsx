import { useEffect, useRef, useCallback } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current!();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useThrottle = (callback: () => void, delay: number) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>();
  const throttledFunction = useCallback(() => {
    if (!timeoutIdRef.current) {
      callback();
      timeoutIdRef.current = setTimeout(() => {
        clearTimeout(timeoutIdRef.current!);
        timeoutIdRef.current = undefined;
      }, delay);
    }
  }, [callback, delay]);

  return throttledFunction;
};

export const useThrottleObserver = (
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
  delay: number
) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>();
  const throttledFunction = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (!timeoutIdRef.current) {
        callback(entries, observer);
        timeoutIdRef.current = setTimeout(() => {
          clearTimeout(timeoutIdRef.current!);
          timeoutIdRef.current = undefined;
        }, delay);
      }
    },
    [callback, delay]
  );

  return throttledFunction;
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
