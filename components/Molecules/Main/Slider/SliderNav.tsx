import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  SliderStateType,
  nextBtn,
  prevBtn,
  enableScroll,
  disableScroll,
  startAuto,
  stopAuto,
} from "../../../../store/slider";
import {
  animationTime,
  sliderChangingTime,
} from "../../../Organisms/MainSlider";

const SliderNav = () => {
  const dispatch = useDispatch();
  const isScrollable = useSelector(
    (state: SliderStateType) => state.scrollable
  );

  const handlePrev = () => {
    if (isScrollable) {
      dispatch(prevBtn());
      dispatch(disableScroll());
      dispatch(stopAuto());
      setTimeout(() => {
        dispatch(enableScroll());
        dispatch(startAuto());
      }, animationTime + sliderChangingTime);
    }
  };
  const handleNext = () => {
    if (isScrollable) {
      dispatch(nextBtn());
      dispatch(disableScroll());
      dispatch(stopAuto());
      setTimeout(() => {
        dispatch(enableScroll());
        dispatch(startAuto());
      }, animationTime + sliderChangingTime);
    }
  };
  return (
    <>
      <Nav className="-prev" onClick={handlePrev}></Nav>
      <Nav className="-next" onClick={handleNext}></Nav>
    </>
  );
};

export default SliderNav;

const Nav = styled.a`
  position: absolute;
  top: 0;

  height: 100%;
  width: 20vw;
  &.-prev {
    left: 0;
  }
  &.-next {
    right: 0;
  }
`;
