import styled, { css } from 'styled-components';

const MainContainer = () => {
  return (
    <Container>
      <p>fdsafdsajkl</p>
    </Container>
  );
};
export default MainContainer;

const Container = styled.div`
  z-index: 800;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.lightNavy};
      border: 10px solid ${theme.colors.navy};
      ${theme.flex.flexCenter};
    `;
  }};
`;
