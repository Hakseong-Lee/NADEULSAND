import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ListItemsType } from '../../../Atoms/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, changeIndex } from '../../../../store/slider';

const MainItemImg = ({
  item,
  index,
  transitionTime,
  maxDelay,
}: {
  item: ListItemsType;
  index: number;
  transitionTime: number;
  maxDelay: number;
}) => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state: SliderStateType) => state.currentIndex);
  const [transition, setTransition] = useState<boolean>(true);

  const replaceSlide = (index: number) => {
    setTransition(false);
    dispatch(changeIndex(index));
    setTimeout(() => {
      setTransition(true);
    }, 100);
  };

  useEffect(() => {
    switch (currentIndex) {
      case 3: {
        setTimeout(() => {
          replaceSlide(0);
        }, transitionTime + maxDelay);
        break;
      }
      case -1: {
        setTimeout(() => {
          replaceSlide(2);
        }, transitionTime + maxDelay);
        break;
      }
    }
  }, [currentIndex]);

  return (
    <>
      <ImgWrap
        className={`${item.name} ${item.index}`}
        style={{
          transform: `translateX(${(index - currentIndex) * 60}rem)`,
          transition: transition ? `transform ${transitionTime / 1000}s ease-in-out` : '',
        }}
      >
        <Image src={item.src} style={{ width: '100%', height: '100%' }} alt={item.name}></Image>
      </ImgWrap>
    </>
  );
};

export default MainItemImg;

const ImgWrap = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  will-change: transform;

  width: 30rem;
  height: 30rem;
  margin-top: -16rem;
  margin-left: -135rem;

  @keyframes img-start {
    0% {
      transform: translate3d(0, 0, 0);
    }
    40% {
      transform: translate3d(500%, 0, 0);
    }
    80% {
      transform: translate3d(200%, 0, 0);
    }
    100% {
      transform: translate3d(350%, 0, 0);
    }
  }
  animation: img-start 4.5s 1 ease-in-out 1.4s;
`;
