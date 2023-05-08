import styled, { css } from 'styled-components';
import MainSlider from '../Organisms/MainSlider';

const MainContainer = () => {
  return (
    <Container>
      <MainSlider />
    </Container>
  );
};
export default MainContainer;

const Container = styled.div`
  z-index: 800;
  width: 100vw;
  height: 100vh;
  position: fixed;
  box-sizing: border-box;
  border: 10px solid #171b36;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.beige};
      ${theme.flex.flexCenter};
    `;
  }};
`;
