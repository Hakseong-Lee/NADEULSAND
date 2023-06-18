import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useInterval } from '../../../../hooks/customHooks';
import { SliderStateType, prevBtn, nextIndex } from '../../../../store/slider';
import NavLogo from '@/components/Atoms/Main/NavLogo';

type SliderNavProps = {
  introTransitionTime: number;
  sliderTransitionTime: number;
  imgTransitionTime: number;
  scrollableTime: number;
  sliderChangingTime: number;
  maxDelay: number;
  changeBgColor: (index: number) => void;
  changeBgColorLeft: (index: number) => void;
};

const SliderNav: React.FC<SliderNavProps> = ({
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

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<string>('none');
  const [side, setSide] = useState<string>('');

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseEnter = useCallback(
    (side: string) => () => {
      setIsHovered('block');
      setSide(side);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered('none');
  }, []);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setTime(sliderTransitionTime);
    }, 3000);
    return () => clearTimeout(transitionTimer);
  }, [sliderTransitionTime]);

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

  const changeIndex = useCallback(
    (action: Function, changeBgColorFunc: Function) => () => {
      if (Scrollable) {
        dispatch(action());
        changeBgColorFunc(currentIndex);
        setScrollable(false);
        setAuto(false);
        setTimeout(() => {
          setScrollable(true);
          setAuto(true);
        }, imgTransitionTime + sliderChangingTime);
      }
    },
    [
      Scrollable,
      currentIndex,
      imgTransitionTime,
      sliderChangingTime,
      changeBgColor,
      changeBgColorLeft,
    ]
  );

  return (
    <>
      <Nav
        className="-prev"
        onClick={changeIndex(prevBtn, changeBgColorLeft)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter('left')}
        onMouseLeave={handleMouseLeave}
      >
        <NavLogoContainer show={isHovered} style={{ top: position.y, left: position.x }}>
          <NavLogo arrow={side} />
        </NavLogoContainer>
      </Nav>

      <Nav
        className="-next"
        onClick={changeIndex(nextIndex, changeBgColor)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter('right')}
        onMouseLeave={handleMouseLeave}
      ></Nav>
    </>
  );
};

export default SliderNav;

const NavLogoContainer = styled.div<{ show: string }>`
  position: absolute;
  width: 5rem;
  height: 5rem;
  display: ${(props) => props.show};
`;

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
