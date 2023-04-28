import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SliderStateType, nextBtn, prevBtn, scroll, auto } from '../../../store/slider';
import { animationTime } from '../../Organisms/MainSlider';

const SliderNav = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: SliderStateType) => state.scrollable);

  const handlePrev = () => {
    if (isActive) {
      dispatch(prevBtn());
      setTimeout(() => {
        dispatch(scroll());
        dispatch(auto());
      }, animationTime + 1000);
    }
  };
  const handleNext = () => {
    if (isActive) {
      dispatch(nextBtn());
      setTimeout(() => {
        dispatch(scroll());
        dispatch(auto());
      }, animationTime + 1000);
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
  z-index: 10;
  height: 100%;
  width: 21.25rem;
  &.-prev {
    left: 0;
  }
  &.-next {
    right: 0;
  }
`;
