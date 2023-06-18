import React, { useState, useEffect } from 'react';
import { useThrottle } from '@/hooks/customHooks';
import { colors } from '@/utils/variables';
import styled, { keyframes } from 'styled-components';

const navy = colors.navy;

const ScrollArrow: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    console.log('scrollPercentage', scrollPercentage);
    if (scrollPercentage >= 80) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  };

  const throttledHandleScroll = useThrottle(handleScroll, 200); // useThrottle 적용

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll]); // 의존성 배열에 throttledHandleScroll를 추가합니다.

  return (
    <ScrollAnimation>
      {showAnimation && (
        <>
          <ArrowIcon style={{ animationDelay: '0.2s' }} />
          <ArrowIcon style={{ animationDelay: '0.1s' }} />
          <ArrowIcon />
        </>
      )}
    </ScrollAnimation>
  );
};

export default ScrollArrow;

const ScrollAnimation = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const ArrowIcon = styled.div`
  width: 1rem;
  height: 1rem;
  border-top: 0.3rem solid ${navy};
  border-right: 0.3rem solid ${navy};
  border-radius: 3px;
  transform: rotate(135deg);
  animation: ${keyframes`
    0% { opacity: 0; transform: translateY(0) rotate(135deg); }
    50% { opacity: 1; transform: translateY(10px) rotate(135deg); }
    100% { opacity: 0; transform: translateY(20px) rotate(135deg); }
  `} 1.5s infinite;
`;
