import styled from 'styled-components';
import { listItems } from '../Atoms/ItemList';
import ItemImg from './../Molecules/MainItemImg';
import ItemName from './../Molecules/MainItemName';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { currentIndexState } from '../Atoms/RecoilAtom';

const MainSlide = () => {
  let introTransitionTime: number = 2000;
  let slideTransitionTime: number = 6000;
  const [time, setTime] = useState<number>(introTransitionTime + slideTransitionTime);
  const [currentItemIndex, setCurrentItemIndex] = useRecoilState<number>(currentIndexState);

  setTimeout(() => {
    setTime(slideTransitionTime);
  }, introTransitionTime);

  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<any>();
    console.log(savedCallback);
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    setCurrentItemIndex((prev) => prev + 1);
  }, time);

  return (
    <>
      <Slide>
        <SlideList>
          {listItems.map((item, index: number) => (
            <SlideItem key={index}>
              <ItemImg item={item} index={index} />
              <ItemName item={item} />
            </SlideItem>
          ))}
        </SlideList>
      </Slide>
    </>
  );
};

export default MainSlide;

const Slide = styled.div`
  width: 100%;
  height: 100%;
`;
const SlideList = styled.ul`
  display: block;
`;
const SlideItem = styled.li`
  display: list-item;
`;
