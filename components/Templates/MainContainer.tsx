import styled, { css } from 'styled-components';
import MainSlider from '../Organisms/MainSlider';

const MainContainer = () => {
  // TODO: reduer에 currentBgColor nextBgColor
  // TODO: 이 방법이 맞는지 더 효율적인 방법은 없는지 확인해보자... canvas를 이용하여 그리는게 나을지?
  // THINK: 슬라이더의 변환 방식이 맞는지? transition을 사용하여 성능을 올리는건 좋았는데 브라우져에서 다른 탭을 눌럿다가 다시 들어가니 끊겨서 보이는 현상이 있는데 배포 후에도 이러면 안되는데

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
  display: block;
  position: fixed;
  box-sizing: border-box;

  ${({ theme }) => {
    return css`
      border: 10px solid ${theme.colors.navy};
      ${theme.flex.flexCenter};
    `;
  }};
`;
