import { colors } from '@/utils/variables';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// TODO: have to change a color of wave according to a currentItem
const Wave = () => {
  const [color, setColor] = useState<string>(colors.caramel);

  return (
    <>
      <Header>
        <WavesSvg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 25 120 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <Waves
              xlinkHref="#gentle-wave"
              x="50"
              y="7"
              style={{
                animationDelay: '4s',
                animationDuration: '7s',
                opacity: '0.3',
              }}
              fill={color}
            />
            <Waves
              xlinkHref="#gentle-wave"
              x="50"
              y="7"
              style={{
                animationDelay: '3s',
                animationDuration: '10s',
                opacity: '0.5',
              }}
              fill={color}
            />
            <Waves
              xlinkHref="#gentle-wave"
              x="50"
              y="7"
              style={{
                animationDelay: '2s',
                animationDuration: '13s',
                opacity: '0.7',
              }}
              fill={color}
            />
            <Waves
              xlinkHref="#gentle-wave"
              x="50"
              y="5"
              style={{ animationDuration: '20s' }}
              fill={color}
            />
          </g>
        </WavesSvg>
      </Header>
    </>
  );
};

export default Wave;

const Header = styled.div`
  position: relative;
  height: 100vh;
`;

const WavesSvg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 17px;
  margin-bottom: -7px; /* Fix for safari gap */
  min-height: 5rem;
  max-height: 15rem;
`;

const moveForeverAnimation = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const Waves = styled.use`
  animation: ${moveForeverAnimation} cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
`;
