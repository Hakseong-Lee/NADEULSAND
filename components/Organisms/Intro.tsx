import styled from 'styled-components';
import IntroTop from '@/components/Molecules/IntroTop';
import IntroBottom from '@/components/Molecules/IntroBottom';
import IntroLogo from '@/components/Molecules/IntroLogo';
import { useState } from 'react';

const Intro = () => {
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
        <IntroTop />
        <IntroBottom />
        <IntroLogo />
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
