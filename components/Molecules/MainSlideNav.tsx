import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { currentIndexState } from '../../Recoil/atoms';
import { useThrottle } from '@/hooks/customHooks';
import { useState } from 'react';
import { useInterval } from '@/hooks/customHooks';
const SlideNav = () => {
  // TODO: 상태관리 리덕스로 바꾸고 액션으로 분리하여 관리 해야 함
  // TODO: 자동으로 변경되는거 + 버튼으로 눌렀을 때 딜레이
  const [currentItemIndex, setCurrentItemIndex] = useRecoilState<number>(currentIndexState);
  const [active, setActive] = useState<boolean>(false);
  const [time, setTime] = useState<number>(10000);

  setTimeout(() => {
    setTime(6000);
  }, 8000);

  useInterval(() => {
    setActive((prev) => !prev);
  }, time);

  const handlePrev = () => {
    if (active) setCurrentItemIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (active) setCurrentItemIndex((prev) => prev + 1);
  };

  return (
    <>
      <Nav className="-prev" onClick={useThrottle(handlePrev, 6000)}></Nav>
      <Nav className="-next" onClick={useThrottle(handleNext, 6000)}></Nav>
    </>
  );
};

export default SlideNav;

const Nav = styled.a`
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 21.25rem;
  &.-prev {
    left: 0;
  }
  &.-next {
    right: 0;
  }
`;
