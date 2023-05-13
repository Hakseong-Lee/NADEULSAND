import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { listItems } from '../Atoms/ItemList';
import { useInterval } from '../../hooks/customHooks';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, nextIndex, enableScroll, disableScroll } from '../../store/slider';
import { ListItemsType } from '../Atoms/ItemList';
import ItemImg from '../Molecules/Main/Slider/ItemImg';
import ItemName from '../Molecules/Main/Slider/ItemName';
import SliderNav from '../Molecules/Main/Slider/SliderNav';
import Wave from '../Molecules/Main/Wave';

type TimeSettings = {
  introTransitionTime: number;
  sliderTransitionTime: number;
  transitionTime: number;
  scrollableTime: number;
  sliderChangingTime: number;
  maxDelay: number;
};

const timeSettings: TimeSettings = {
  introTransitionTime: 6000,
  sliderTransitionTime: 5000,
  transitionTime: 2000,
  scrollableTime: 1000,
  sliderChangingTime: 1000,
  maxDelay: 700,
};

const MainSlide: React.FC<TimeSettings> = () => {
  const { transitionTime, maxDelay, sliderChangingTime } = timeSettings;
  const dispatch = useDispatch();
  const isAuto = useSelector((state: SliderStateType) => state.autoScroll);
  const [time, setTime] = useState<number>(timeSettings.introTransitionTime);

  useEffect(() => {
    const TransitionTimer = setTimeout(() => {
      setTime(timeSettings.sliderTransitionTime);
    }, 3000);
    return () => clearTimeout(TransitionTimer);
  }, []);

  useInterval(() => {
    if (isAuto) {
      dispatch(nextIndex());
      dispatch(disableScroll());
      setTimeout(() => {
        dispatch(enableScroll());
      }, timeSettings.transitionTime + timeSettings.scrollableTime);
    }
  }, time);

  return (
    <>
      <Slide>
        <Wave />
        <SlideList>
          {listItems.map((item: ListItemsType, index: number) => (
            <SlideItem key={index}>
              <ItemImg
                item={item}
                index={index}
                transitionTime={transitionTime}
                maxDelay={maxDelay}
              />
              <ItemName item={item} transitionTime={transitionTime} maxDelay={maxDelay} />
            </SlideItem>
          ))}
        </SlideList>
        <SliderNav transitionTime={transitionTime} sliderChangingTime={sliderChangingTime} />
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
