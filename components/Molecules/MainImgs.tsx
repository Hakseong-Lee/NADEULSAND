import styled from 'styled-components';
import Image from 'next/image';
import mainCaramel from '../../public/assets/img/mainCaramel.webp';
export default function mainImgs() {
  return (
    <>
      <ImgContainer>
        <Image
          src={mainCaramel}
          style={{ width: '30rem', height: '32rem' }}
          alt="mainCaramel"
        ></Image>
      </ImgContainer>
    </>
  );
}
const ImgContainer = styled.div`
  z-index: 800;
`;
