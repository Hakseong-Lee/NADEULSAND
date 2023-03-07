import styled from 'styled-components';
import Image from 'next/image';
import { ListItemsType } from '../Atoms/ItemList';

export default function mainItemImg({
  item,
  currentItemNum,
}: {
  item: ListItemsType;
  currentItemNum: number;
}) {
  return (
    <>
      <ImgWrap
        className={`${item.name} ${item.num}`}
        style={{ transform: `translateX(-${currentItemNum * 900}px)` }}
      >
        <Image src={item.src} style={{ width: '100%', height: '100%' }} alt={item.name}></Image>
      </ImgWrap>
    </>
  );
}

const ImgWrap = styled.span`
  z-index: 8;
  filter: drop-shadow(10px 20px 4px rgba(0, 0, 0, 0.15));
  width: 32rem;
  height: 32rem;
  position: absolute;
  transition: transform 3s ease-in-out;
  @keyframes img-start {
    0% {
      transform: translate3d(500%, 0, 0);
    }
    20% {
      transform: translate3d(500%, 0, 0);
    }
    50% {
      transform: translate3d(-25%, 0, 0);
    }
    60% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  animation: img-start 6s 1 ease-in-out 1.5s;

  &.caramel {
    top: 50%;
    left: 50%;
    margin-top: -22rem;
    margin-left: -15.5rem;
  }
  &.strawberry {
    top: 50%;
    left: 50%;
    margin-top: -22rem;
    margin-left: 40rem;
  }
  &.kakao {
    top: 50%;
    left: 50%;
    margin-top: -22rem;
    margin-left: -75rem;
  }
`;
