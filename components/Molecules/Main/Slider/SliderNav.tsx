import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../../../../hooks/customHooks';
import { SliderStateType, prevBtn, nextIndex } from '../../../../store/slider';

type sliderNavProps = {
  introTransitionTime: number;
  sliderTransitionTime: number;
  imgTransitionTime: number;
  scrollableTime: number;
  sliderChangingTime: number;
  maxDelay: number;
  changeBgColor: (index: number) => void;
  changeBgColorLeft: (index: number) => void;
};

const SliderNav: React.FC<sliderNavProps> = ({
  introTransitionTime,
  sliderTransitionTime,
  imgTransitionTime,
  scrollableTime,
  sliderChangingTime,
  changeBgColor,
  changeBgColorLeft,
}) => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state: SliderStateType) => state.currentIndex);
  const [Scrollable, setScrollable] = useState<boolean>(false);
  const [Auto, setAuto] = useState<boolean>(true);
  const [time, setTime] = useState<number>(introTransitionTime);

  useEffect(() => {
    const TransitionTimer = setTimeout(() => {
      setTime(sliderTransitionTime);
    }, 3000);
    return () => clearTimeout(TransitionTimer);
  }, []);

  useInterval(() => {
    if (Auto) {
      dispatch(nextIndex());
      setScrollable(false);
      changeBgColor(currentIndex);
      setTimeout(() => {
        setScrollable(true);
      }, imgTransitionTime + scrollableTime);
    }
  }, time);

  const handlePrev = useCallback(() => {
    if (Scrollable) {
      dispatch(prevBtn());
      changeBgColorLeft(currentIndex);
      setScrollable(false);
      setAuto(false);
      handlePrevRef.current = setTimeout(() => {
        setScrollable(true);
        setAuto(true);
      }, imgTransitionTime + sliderChangingTime);
    }
  }, [Scrollable]);

  const handleNext = useCallback(() => {
    if (Scrollable) {
      dispatch(nextIndex());
      changeBgColor(currentIndex);
      setScrollable(false);
      setAuto(false);
      handleNextRef.current = setTimeout(() => {
        setScrollable(true);
        setAuto(true);
      }, imgTransitionTime + sliderChangingTime);
    }
  }, [Scrollable]);

  const handlePrevRef = useRef<NodeJS.Timeout | undefined>();
  const handleNextRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    return () => {
      clearTimeout(handlePrevRef.current);
      clearTimeout(handleNextRef.current);
    };
  }, []);

  return (
    <>
      <Nav className="-prev" onClick={handlePrev}></Nav>
      <Nav className="-next" onClick={handleNext}></Nav>
    </>
  );
};

export default SliderNav;

const Nav = styled.a`
  position: absolute;
  top: 0;
  height: 100%;
  width: 20vw;
  &.-prev {
    left: 0;
  }
  &.-next {
    right: 0;
  }
`;
