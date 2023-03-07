import styled, { css } from 'styled-components';
import MainCircle from '../Atoms/MainCircle';
import MainImgs from '../Molecules/SlideItem';
import MainItemName from '../Molecules/MainItemName';
import MainSlide from './../Organisms/MainSlide';
export default function mainContainer() {
  return (
    <MainContainer>
      <MainCircle />
      <MainSlide />
    </MainContainer>
  );
}
const MainContainer = styled.div`
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
