import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { listItems } from '../Atoms/ItemList';
import { useInterval } from '@/hooks/customHooks';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, next, scroll } from '../../store/slider';
import ItemImg from '../Molecules/Slider/ItemImg';
import ItemName from './../Molecules/Slider/ItemName';
import SliderNav from '../Molecules/Slider/SliderNav';

export const introTransitionTime: number = 6000,
  sliderTransitionTime: number = 5000,
  animationTime: number = 2000;

const MainSlide = () => {
  const dispatch = useDispatch();
  const isAuto = useSelector((state: SliderStateType) => state.autoScroll);
  const [time, setTime] = useState<number>(6000);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(sliderTransitionTime);
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);

  //TODO: 처음 시작했을 때 스크롤 가능하게 만들기
  useInterval(() => {
    if (isAuto) {
      dispatch(next());
      setTimeout(() => {
        dispatch(scroll());
      }, animationTime + 1000);
    }
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
        <SliderNav />
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
