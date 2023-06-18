import { colors } from '@/utils/variables';
import styled, { keyframes } from 'styled-components';

const navy = colors.navy;
const lightNavy = colors.lightNavy;

type NavLogoProps = {
  arrow: string;
};
const NavLogo = (props: NavLogoProps) => {
  return (
    <Wrapper>
      <Circle />
      <Line className="top" />
      <Line className="bottom" />
      <Line className="left" />
      <Line className="right" />
      <Arrow className={props.arrow} />
    </Wrapper>
  );
};
export default NavLogo;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  25% {
    opacity: 0.5;
    transform: scale(0.5) rotate(90deg);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.8) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: scale(1) rotate(240deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  animation: ${fadeIn} 0.25s linear;
`;

const Circle = styled.div`
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  margin-left: -0.24rem;
  margin-top: -0.4rem;
  border-radius: 50%;
  opacity: 0.5;
  background-color: ${lightNavy};
`;

const Line = styled.div`
  position: absolute;
  width: 0.3rem;
  height: 2rem;
  opacity: 0.5;
  background-color: ${lightNavy};
  transform: translateY(-50%);
  &.left {
    margin-left: -2rem;
    transform: translateY(-50%) rotate(90deg);
  }
  &.right {
    margin-left: 2rem;
    transform: translateY(-50%) rotate(90deg);
  }
  &.top {
    margin-top: 2rem;
  }
  &.bottom {
    margin-top: -2rem;
  }
`;

const Arrow = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-top: 0.3rem solid ${navy};
  border-right: 0.3rem solid ${navy};
  border-radius: 3px;
  &.left {
    margin-left: -2.8rem;
    margin-top: -1rem;
    transform: rotate(-135deg);
  }
  &.right {
    transform: rotate(45deg);
    margin-left: 1rem;
    margin-top: -1rem;
  }
`;
