import styled from 'styled-components';
import Image from 'next/image';
import LogoTop from '@/public/assets/img/logoTop.png';
import LogoBottom from '@/public/assets/img/logoBottom.png';

export default function Intro() {
  return (
    <>
      <LogoContainer>
        <LogoBox>
          <ImgBox>
            <Image src={LogoTop} style={{ width: '100%', height: '100%' }} alt="logotop"></Image>
          </ImgBox>
        </LogoBox>
        <LogoBox className="logo-bottom">
          <ImgBox className="bottom">
            <Image src={LogoBottom} style={{ width: '100%', height: '100%' }} alt="logotop"></Image>
          </ImgBox>
        </LogoBox>
      </LogoContainer>
    </>
  );
}

const LogoContainer = styled.div`
  width: 28rem;
  height: 28rem;
  position: absolute;

  @keyframes fade {
    0% {
      scale: 1;
    }
    100% {
      scale: 0.85;
    }
  }
  animation: fade 2.5s ease-in 1s 1 normal;
`;
const LogoBox = styled.div`
  height: 50%;
  width: 100%;
  overflow: hidden;
  position: absolute;

  &.logo-bottom {
    bottom: 0;
  }
`;
const ImgBox = styled.div`
  &.img {
    width: 100px;
    height: 100%;
  }
  @keyframes showTopLogo {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    30% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
  position: absolute;
  animation: showTopLogo 3s ease 1.3s 1 normal;
  transform: translate(0, 100%);

  &.bottom {
    @keyframes showBottomLogo {
      0% {
        transform: translate3d(0, -100%, 0);
      }
      30% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(0, -100%, 0);
      }
    }
    animation: showBottomLogo 3s ease 1.3s 1 normal;
    transform: translate(0, -100%);
  }
`;
