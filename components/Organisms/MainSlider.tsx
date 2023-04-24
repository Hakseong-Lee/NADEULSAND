import styled from 'styled-components';
import { useState } from 'react';
import { listItems } from '../Atoms/ItemList';
import { useInterval } from '@/hooks/customHooks';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, next, scroll } from '../../store/slider';
import ItemImg from '../Molecules/Slider/ItemImg';
import ItemName from './../Molecules/Slider/ItemName';
import SliderNav from '../Molecules/Slider/SliderNav';

export const introTransitionTime: number = 2000,
  sliderTransitionTime: number = 6000,
  animationTime: number = 4000;

const MainSlide = () => {
  const dispatch = useDispatch();
  const isAuto = useSelector((state: SliderStateType) => state.autoScroll);
  const [time, setTime] = useState<number>(introTransitionTime + sliderTransitionTime);

  //TODO: 애니메이션 효과 들어오고 나가고 분리하고 시간 조정
  setTimeout(() => {
    setTime(sliderTransitionTime);
  }, introTransitionTime);

  useInterval(() => {
    if (isAuto) {
      dispatch(next());
      setTimeout(() => {
        dispatch(scroll());
      }, animationTime);
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
