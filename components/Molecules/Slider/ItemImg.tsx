import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { ListItemsType } from '../../Atoms/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, changeIndex } from '../../../store/slider';

const MainItemImg = ({ item, index }: { item: ListItemsType; index: number }) => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state: SliderStateType) => state.currentIndex);

  const itemList: number = 3;
  const transitionTime: number = 2;
  const [transition, setTransition] = useState<boolean>(true);
  const replaceSlide = (index: number) => {
    setTimeout(() => {
      dispatch(changeIndex(index));
      setTransition(false);
    }, transitionTime * 1000 + 10);
    setTimeout(() => {
      setTransition(true);
    }, transitionTime * 1000 + 50);
  };

  if (currentIndex === itemList) replaceSlide(0);
  if (currentIndex === -1) replaceSlide(2);

  return (
    <>
      <ImgWrap
        className={`${item.name} ${item.index}`}
        style={{
          marginLeft: `${index * 52}rem`,
          transform: `translateX(${currentIndex * -52}rem)`,
          transition: transition ? `transform ${transitionTime}s ease-in-out` : '',
        }}
      >
        <Image src={item.src} style={{ width: '100%', height: '100%' }} alt={item.name}></Image>
      </ImgWrap>
    </>
  );
};

export default MainItemImg;

const ImgWrap = styled.span`
  width: 32rem;
  height: 32rem;
  position: absolute;
  top: 50%;
  left: -50%;
  margin-top: -22rem;
  will-change: transform;

  @keyframes img-start {
    0% {
      transform: translate3d(500%, 0, 0);
    }
    40% {
      transform: translate3d(500%, 0, 0);
    }
    80% {
      transform: translate3d(-25%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  animation: img-start 4.5s 1 ease-in-out 1.4s;
`;
