import styled, { css } from 'styled-components';

export default function circle() {
  return (
    <>
      <Circle />
    </>
  );
}

const Circle = styled.div`
  z-index: 7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56.25rem;
  height: 56.25rem;

  border-radius: 50%;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.caramel};
    `;
  }};
`;
