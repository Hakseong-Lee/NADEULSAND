import styled, { css } from 'styled-components';
import Circle from '../Atoms/Circle';
import MainImgs from './../Molecules/MainImgs';
export default function mainContainer() {
  return (
    <MainContainer>
      <Circle />
      <MainImgs />
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 10px solid #171b36;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.beige};
      ${theme.flex.flexCenter};
    `;
  }};
`;
