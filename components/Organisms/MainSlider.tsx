import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { listItems } from '../Atoms/ItemList';
import { useInterval } from '@/hooks/customHooks';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, nextIndex, enableScroll, disableScroll } from '../../store/slider';
import ItemImg from '../Molecules/Main/Slider/ItemImg';
import ItemName from '../Molecules/Main/Slider/ItemName';
import SliderNav from '../Molecules/Main/Slider/SliderNav';
import Wave from '../Molecules/Main/Wave';

export const introTransitionTime: number = 6000,
  sliderTransitionTime: number = 5000,
  animationTime: number = 2000,
  scrollableTime: number = 1000,
  sliderChangingTime: number = 1000;

const MainSlide = () => {
  const dispatch = useDispatch();
  const isAuto = useSelector((state: SliderStateType) => state.autoScroll);
  const [time, setTime] = useState<number>(introTransitionTime);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(sliderTransitionTime);
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);

  useInterval(() => {
    if (isAuto) {
      dispatch(nextIndex());
      dispatch(disableScroll());
      setTimeout(() => {
        dispatch(enableScroll());
      }, animationTime + scrollableTime);
    }
  }, time);

  return (
    <>
      <Slide>
        <Wave />
        <SlideList>
          {listItems.map((item, index: number) => (
            <SlideItem key={index}>
              <ItemImg item={item} index={index} />
              <ItemName item={item} />
            </SlideItem>
          ))}
        </SlideList>
        <SliderNav />
      </Slide>
    </>
  );
};

export default MainSlide;

const Slide = styled.div`
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const SlideList = styled.ul`
  display: block;
`;
const SlideItem = styled.li``;
