import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  SliderStateType,
  nextBtn,
  prevBtn,
  enableScroll,
  disableScroll,
  startAuto,
  stopAuto,
} from '../../../../store/slider';

const SliderNav = ({
  transitionTime,
  sliderChangingTime,
}: {
  transitionTime: number;
  sliderChangingTime: number;
}) => {
  const dispatch = useDispatch();
  const isScrollable = useSelector((state: SliderStateType) => state.scrollable);

  const handlePrev = useCallback(() => {
    if (isScrollable) {
      dispatch(prevBtn());
      dispatch(disableScroll());
      dispatch(stopAuto());
      handlePrevRef.current = setTimeout(() => {
        dispatch(enableScroll());
        dispatch(startAuto());
      }, transitionTime + sliderChangingTime);
    }
  }, [isScrollable, dispatch]);

  const handleNext = useCallback(() => {
    if (isScrollable) {
      dispatch(nextBtn());
      dispatch(disableScroll());
      dispatch(stopAuto());
      handleNextRef.current = setTimeout(() => {
        dispatch(enableScroll());
        dispatch(startAuto());
      }, transitionTime + sliderChangingTime);
    }
  }, [isScrollable, dispatch]);

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
