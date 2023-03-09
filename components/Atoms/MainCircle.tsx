import styled, { css } from 'styled-components';

const MainCircle = () => {
  return (
    <>
      <Circle />
    </>
  );
};
export default MainCircle;

const Circle = styled.div`
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
