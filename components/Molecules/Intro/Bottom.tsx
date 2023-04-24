import styled from 'styled-components';

const Intro = () => {
  return (
    <>
      <IntroBottom className="bottom-1"></IntroBottom>
      <IntroBottom className="bottom-2"></IntroBottom>
    </>
  );
};
export default Intro;

const IntroBottom = styled.div`
  position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;

  @keyframes slideInBottomToUpper-1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, -40%, 0);
    }
    15% {
      transform: translate3d(0, -50%, 0);
    }
    85% {
      transform: translate3d(0, -50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInBottomToUpper-2 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, -40%, 0);
    }
    15% {
      transform: translate3d(0, -51%, 0);
    }
    85% {
      transform: translate3d(0, -51%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &.bottom-1 {
    background-color: #527578;
    animation: slideInBottomToUpper-1 2.5s linear 0.7s 1 normal;
  }
  &.bottom-2 {
    background-color: #d3d3d3;
    animation: slideInBottomToUpper-2 2.5s linear 1s 1 normal;
  }
`;
