import styled from 'styled-components';
import { listItems } from '../Atoms/ItemList';
import ItemImg from './../Molecules/MainItemImg';
import ItemName from './../Molecules/MainItemName';
import { useState, useEffect } from 'react';

export default function mainSlide() {
  const [currentItemNum, setCurrentItemNum] = useState<number>(0);
  const ChangeNum = (currentItemNum: number) => {
    switch (currentItemNum) {
      case 0:
        setCurrentItemNum((prev) => prev + 1);
        break;
      case 1:
        setCurrentItemNum((prev) => prev + 1);
        break;
      case 2:
        setCurrentItemNum(0);
        break;
    }
  };
  let introTransitionTime: number = 2000;
  let slideTransitionTime: number = 6000;
  const [time, setTime] = useState<number>(introTransitionTime + slideTransitionTime);
  setTimeout(() => {
    setTime(slideTransitionTime);
  }, introTransitionTime);
  useEffect(() => {
    const timer = setInterval(() => {
      ChangeNum(currentItemNum);
    }, time);
    return () => clearInterval(timer);
  }, [currentItemNum]);

  return (
    <>
      <MainSlide>
        <SlideList>
          {listItems.map((item, index: number) => (
            <SlideItem key={index}>
              <ItemImg item={item} currentItemNum={currentItemNum} />
              <ItemName item={item} currentItemNum={currentItemNum} />
            </SlideItem>
          ))}
        </SlideList>
      </MainSlide>
    </>
  );
}
const MainSlide = styled.div`
  width: 100%;
  height: 100%;
`;
const SlideList = styled.ul`
  display: block;
`;
const SlideItem = styled.li`
  display: list-item;
`;
