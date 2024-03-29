import styled from 'styled-components';

const Intro = () => {
  return (
    <>
      <IntroTop className="upper-1"></IntroTop>
      <IntroTop className="upper-2"></IntroTop>
    </>
  );
};
export default Intro;

const IntroTop = styled.div`
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;

  @keyframes slideInUpperToBottom-1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, 40%, 0);
    }
    15% {
      transform: translate3d(0, 50%, 0);
    }
    85% {
      transform: translate3d(0, 50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInUpperToBottom-2 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, 40%, 0);
    }
    15% {
      transform: translate3d(0, 51%, 0);
    }
    85% {
      transform: translate3d(0, 51%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &.upper-1 {
    background-color: #527578;
    animation: slideInUpperToBottom-1 2.5s linear 0.7s 1 normal;
  }
  &.upper-2 {
    background-color: #d3d3d3;
    animation: slideInUpperToBottom-2 2.5s linear 1s 1 normal;
  }
`;
