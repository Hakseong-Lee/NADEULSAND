import { colors } from '@/utils/variables';
import styled, { keyframes } from 'styled-components';

const navy = colors.navy;

const ScrollArrow: React.FC = () => {
  return (
    <ScrollAnimation>
      <ArrowIcon delay="0.2s" />
      <ArrowIcon delay="0.1s" />
      <ArrowIcon />
    </ScrollAnimation>
  );
};

export default ScrollArrow;

const ScrollAnimation = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const arrowAnimation = keyframes`
  0% { opacity: 0; transform: translateY(0) rotate(135deg); }
  50% { opacity: 1; transform: translateY(10px) rotate(135deg); }
  100% { opacity: 0; transform: translateY(20px) rotate(135deg); }
`;

interface ArrowIconProps {
  delay?: string;
}

const ArrowIcon = styled.div<ArrowIconProps>`
  width: 1rem;
  height: 1rem;
  border-top: 0.3rem solid ${navy};
  border-right: 0.3rem solid ${navy};
  border-radius: 3px;
  transform: rotate(135deg);
  animation: ${arrowAnimation} 1s infinite;
  animation-delay: ${({ delay }) => delay || '0s'};dja
`;
