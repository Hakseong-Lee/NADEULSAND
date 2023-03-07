import styled from 'styled-components';

export default function border() {
  return (
    <>
      <Border />
    </>
  );
}

const Border = styled.div`
  z-index: 9;
  position: fixed;
  width: 100vw;
  height: 100vh;
  border: 10px solid #171b36;
`;
