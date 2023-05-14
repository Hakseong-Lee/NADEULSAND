import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { SliderStateType } from '../../../../store/slider';
import { ListItemsType } from '../../../../utils/ItemList';

const MainItemName = ({
  item,
  transitionTime,
  maxDelay,
}: {
  item: ListItemsType;
  transitionTime: number;
  maxDelay: number;
}) => {
  const currentIndex = useSelector((state: SliderStateType) => state.currentIndex);
  const delay: number = 1;

  const replaceSlide = () => {
    setTransition(false);
    setTimeout(() => {
      setTransition(true);
    }, 100);
  };

  const [transition, setTransition] = useState<boolean>(true);
  useEffect(() => {
    switch (currentIndex) {
      case 3: {
        setTimeout(() => {
          replaceSlide();
        }, transitionTime + maxDelay);
        break;
      }
      case -1: {
        setTimeout(() => {
          replaceSlide();
        }, transitionTime + maxDelay);
        break;
      }
    }
  }, [currentIndex]);

  return (
    <>
      <NameContainer>
        <NameWrap>
          {item.nameArr.map((name: string, index: number) => {
            return (
              <ItemName
                key={index}
                style={{
                  transform: `translateX(${(item.index - currentIndex) * 20}px)`,
                  opacity: item.index === currentIndex ? 1 : 0,
                  transition: transition
                    ? `transform 1s linear ${index / 10 + delay}s, opacity 0.5s linear ${
                        index / 10 + delay
                      }s`
                    : '',
                }}
              >
                {name}
              </ItemName>
            );
          })}
        </NameWrap>
        <SubName>NADEUL SAND</SubName>
      </NameContainer>
    </>
  );
};

export default MainItemName;
const NameContainer = styled.h2`
  ${({ theme }) => {
    return css`
      ${theme.flex.flexCenterColumn};
      color: ${theme.colors.white};
    `;
  }};
  position: absolute;
  text-align: center;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
const NameWrap = styled.span`
  ${({ theme }) => {
    return css`
      ${theme.flex.flexCenter};
    `;
  }};
`;
const NameStartAnimation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
      transform: translate3d(0, -100%, 0) rotateX(-90deg);
    }
    100% {
      transform: translate3d(0, 0%, 0) rotateX(0deg);
    }
`;
const ItemName = styled.span`
  pointer-events: none;
  ${({ theme }) => {
    return css`
      font-size: clamp(1.8rem, 5vw, ${theme.font.size.subtitle});
      font-weight: ${theme.font.weight.normal};
    `;
  }};

  animation: ${NameStartAnimation} 2s 1 linear 3s;
`;
const SubName = styled.span`
  pointer-events: none;
  ${({ theme }) => {
    return css`
      font-size: clamp(1.2rem, 2vw, ${theme.font.size.paragraph});
      font-weight: ${theme.font.weight.light};
    `;
  }};
  animation: ${NameStartAnimation} 2s 1 linear 3s;
`;
