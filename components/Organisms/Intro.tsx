import styled from 'styled-components';
import Top from '../Molecules/Intro/Top';
import Bottom from '../Molecules/Intro/Bottom';
import Logo from '../Molecules/Intro/Logo';
import { useState } from 'react';

const Intro = () => {
  //TODO: 의미 없는 숫자들 변수로 지정해서 가독성 높히기
  const [display, setdisplay] = useState<string>('');
  const [background, setbackground] = useState<string>('');
  setTimeout(() => {
    setdisplay('-hide');
  }, 3500);
  setTimeout(() => {
    setbackground('-transparent');
  }, 2500);
  return (
    <>
      <IntroContainer className={`${display} ${background}`}>
        <Top />
        <Bottom />
        <Logo />
      </IntroContainer>
    </>
  );
};
export default Intro;

const IntroContainer = styled.div`
  &.-hide {
    display: none;
  }
  &.-transparent {
    background-color: transparent;
  }
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #2d2d2d;
`;
