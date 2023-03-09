import styled, { css } from 'styled-components';
import MainCircle from '../Atoms/MainCircle';
import MainSlide from './../Organisms/MainSlide';

const MainContainer = () => {
  return (
    <Container>
      <MainCircle />
      <MainSlide />
    </Container>
  );
};
export default MainContainer;

const Container = styled.div`
  z-index: 800;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.beige};
      ${theme.flex.flexCenter};
    `;
  }};
`;
