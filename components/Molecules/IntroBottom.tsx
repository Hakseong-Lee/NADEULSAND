import styled from 'styled-components';
export default function Intro() {
  return (
    <>
      <IntroBottom className="bottom-1"></IntroBottom>
      <IntroBottom className="bottom-2"></IntroBottom>
    </>
  );
}
const IntroBottom = styled.div`
  position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;

  @keyframes slideInUp-1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, -40%, 0);
    }
    15% {
      transform: translate3d(0, -50%, 0);
    }
    80% {
      transform: translate3d(0, -50%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideInUp-2 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    10% {
      transform: translate3d(0, -40%, 0);
    }
    15% {
      transform: translate3d(0, -51%, 0);
    }
    80% {
      transform: translate3d(0, -51%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  &.bottom-1 {
    background-color: #527578;
    animation: slideInUp-1 2.5s linear 0.5s 1 normal;
  }
  &.bottom-2 {
    background-color: #d3d3d3;
    animation: slideInUp-2 2.5s linear 0.8s 1 normal;
  }
`;
