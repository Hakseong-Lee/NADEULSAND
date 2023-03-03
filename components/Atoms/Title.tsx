import styled, { css } from 'styled-components';

export default function title() {
  return <Title>NADEUL SAND COOKIE</Title>;
}

const Title = styled.h1`
  position: absolute;
  width: 100vw;
  text-align: center;
  z-index: 10;
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.title};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.white};
    `;
  }}
`;
