import styled from 'styled-components';

export default function Intro() {
  return (
    <>
      <IntroTop className="upper-1"></IntroTop>
      <IntroTop className="upper-2"></IntroTop>
    </>
  );
}

const IntroTop = styled.div`
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;

  @keyframes slideInDown-1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, 40%, 0);
    }
    15% {
      transform: translate3d(0, 50%, 0);
    }
    80% {
      transform: translate3d(0, 50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInDown-2 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, 40%, 0);
    }
    15% {
      transform: translate3d(0, 51%, 0);
    }
    80% {
      transform: translate3d(0, 51%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &.upper-1 {
    background-color: rgb(82, 117, 120);
    animation: slideInDown-1 2.5s linear 0.5s 1 normal;
  }
  &.upper-2 {
    background-color: #d3d3d3;
    animation: slideInDown-2 2.5s linear 0.8s 1 normal;
  }
`;
