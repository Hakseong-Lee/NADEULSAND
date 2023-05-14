import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { listItems } from '../../utils/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType } from '../../store/slider';
import { ListItemsType } from '../../utils/ItemList';
import ItemImg from '../Molecules/Main/Slider/ItemImg';
import ItemName from '../Molecules/Main/Slider/ItemName';
import SliderNav from '../Molecules/Main/Slider/SliderNav';
import Wave from '../Molecules/Main/Wave';
import { bgOrder, waveOrder } from '../../utils/variables';

type TimeSettings = {
  introTransitionTime: number;
  sliderTransitionTime: number;
  imgTransitionTime: number;
  bgTransitionTime: number;
  scrollableTime: number;
  sliderChangingTime: number;
  delay: number;
  maxDelay: number;
};

type ContainerProps = {
  position: string;
  bgcolor: string;
  nextbgcolor: string;
  transition: string;
};

const MainSlide = () => {
  const timeSettings: TimeSettings = {
    introTransitionTime: 6000,
    sliderTransitionTime: 5000,
    imgTransitionTime: 2000,
    bgTransitionTime: 1500,
    scrollableTime: 1000,
    sliderChangingTime: 1000,
    delay: 1000,
    maxDelay: 700,
  };

  const [bgColor, setBgColor] = useState<string>(bgOrder[0]);
  const [nextBgColor, setNextBgColor] = useState<string>(bgOrder[1]);
  const [waveColor, setWaveColor] = useState<string>(waveOrder[0]);
  const [position, setPosition] = useState<string>('top center');
  const [transition, setTransition] = useState<string>('background-position 1.5s linear;');

  // TODO: 배경
  const changeBgColor = (index: number) => {
    setTransition('');
    setNextBgColor(bgOrder[String(index + 1)]);
    setPosition('left center');
    setTimeout(() => {
      setTransition(`background-position ${timeSettings.bgTransitionTime / 1000}s linear;`);
      setPosition('center center');
      setWaveColor(waveOrder[String(index + 1)]);
    }, timeSettings.delay);
    setTimeout(() => {
      setTransition('');
      setBgColor(bgOrder[String(index + 1)]);
    }, timeSettings.delay + timeSettings.bgTransitionTime);
  };
  const changeBgColorLeft = (index: number) => {
    setTransition('');
    setNextBgColor(bgOrder[String(index - 1)]);
    setPosition('right center');
    setTimeout(() => {
      setTransition(`background-position ${timeSettings.bgTransitionTime / 1000}s linear;`);
      setPosition('center center');
      setWaveColor(waveOrder[String(index - 1)]);
    }, timeSettings.delay);
    setTimeout(() => {
      setTransition('');
      setBgColor(bgOrder[String(index - 1)]);
    }, timeSettings.delay + timeSettings.bgTransitionTime);
  };

  return (
    <>
      <Slide
        position={position}
        bgcolor={bgColor}
        nextbgcolor={nextBgColor}
        transition={transition}
      >
        <Wave wavecolor={waveColor} />
        <SlideList>
          {listItems.map((item: ListItemsType, index: number) => (
            <SlideItem key={index}>
              <ItemImg
                item={item}
                index={index}
                transitionTime={timeSettings.imgTransitionTime}
                maxDelay={timeSettings.maxDelay}
              />
              <ItemName
                item={item}
                transitionTime={timeSettings.imgTransitionTime}
                maxDelay={timeSettings.maxDelay}
              />
            </SlideItem>
          ))}
        </SlideList>
        <SliderNav
          {...timeSettings}
          changeBgColor={changeBgColor}
          changeBgColorLeft={changeBgColorLeft}
        />
      </Slide>
    </>
  );
};

export default MainSlide;

const Slide = styled.div<ContainerProps>`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  background: radial-gradient(
    ellipse,
    ${(props) => props.nextbgcolor} 50%,
    ${(props) => props.bgcolor} 50%
  );
  background-size: 700% 700%;
  background-position: ${(props) => props.position};
  transition: ${(props) => props.transition};
`;
const SlideList = styled.ul`
  display: block;
`;
const SlideItem = styled.li``;
