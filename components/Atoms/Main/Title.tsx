import styled, { css } from "styled-components";

const Title = styled.h1`
  position: absolute;
  z-index: 900;
  width: 100vw;

  text-align: center;
  pointer-events: none;
  ${({ theme }) => {
    return css`
      margin-top: ${theme.margins.lg};
      font-size: clamp(1.8rem, 6vw, ${theme.font.size.title});
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.white};
    `;
  }}
  @keyframes title-start {
    0% {
      transform: translate3d(0, 100%, 0) rotateX(90deg);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) rotateX(0deg);
    }
  }
  animation: title-start 2s 1 linear 3s;
`;

export default Title;
