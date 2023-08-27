import styled, { css } from 'styled-components';
import MainSlider from '../Organisms/MainSlider';

const SlideContainer = () => {
  return (
    <Container>
      <MainSlider />
    </Container>
  );
};
export default SlideContainer;

const Container = styled.div`
  z-index: 800;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: block;
  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      border: 10px solid ${theme.colors.navy};
      ${theme.flex.flexCenter};
    `;
  }};
`;
