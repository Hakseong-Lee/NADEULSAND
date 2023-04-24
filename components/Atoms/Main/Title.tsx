import styled, { css } from 'styled-components';

const Title = styled.h1`
  position: absolute;
  width: 100vw;
  margin-top: 1rem;
  text-align: center;
  z-index: 10;
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.title};
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
