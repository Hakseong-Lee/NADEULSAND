import styled from 'styled-components';
import Image from 'next/image';
import { ListItemsType } from '../Atoms/ItemList';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentIndexState } from '../Atoms/RecoilAtom';

export default function mainItemImg({ item, index }: { item: ListItemsType; index: number }) {
  const transitionTime: number = 3;
  const transitionStyle: string = `transform ${transitionTime}s ease-in-out`;
  const [transition, setTransition] = useState<string>(transitionStyle);
  const [currentItemIndex, setCurrentItemIndex] = useRecoilState<number>(currentIndexState);

  const replaceSlide = () => {
    setTimeout(() => {
      setTransition('');
      setCurrentItemIndex(0);
    }, transitionTime * 1000);
    setTimeout(() => {
      setTransition(transitionStyle);
    }, transitionTime * 1000 + 100);
  };

  if (currentItemIndex === 3) {
    replaceSlide();
  }
  return (
    <>
      <ImgWrap
        className={`${item.name} ${item.num}`}
        style={{
          marginLeft: `${index * 52}rem`,
          transform: `translateX(-${currentItemIndex * 52}rem)`,
          transition: `${transition}`,
        }}
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
  top: 50%;
  left: -7%;
  margin-top: -22rem;
  will-change: transform;

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
`;
