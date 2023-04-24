import styled from 'styled-components';
import { useState } from 'react';
import { listItems } from '../Atoms/ItemList';
import { useInterval } from '@/hooks/customHooks';
import { useSelector, useDispatch } from 'react-redux';
import { SlideStateType, next } from '../../store/slide';
import ItemImg from './../Molecules/MainItemImg';
import ItemName from './../Molecules/MainItemName';
import SlideNav from '../Molecules/MainSlideNav';

const MainSlide = () => {
  let introTransitionTime: number = 2000,
    slideTransitionTime: number = 6000;
  const currentIndex = useSelector((state: SlideStateType) => state.currentIndex);
  const dispatch = useDispatch();

  const [time, setTime] = useState<number>(introTransitionTime + slideTransitionTime);

  //intro 화면 전환 후 index 변화
  setTimeout(() => {
    setTime(slideTransitionTime);
  }, introTransitionTime);

  useInterval(() => {
    dispatch(next());
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
        <SlideNav />
        <Border />
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
const Border = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  border: 10px solid #171b36;
`;
