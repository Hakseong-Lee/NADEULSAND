import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { SliderStateType } from '../../../store/slider';
import { ListItemsType } from '../../Atoms/ItemList';

const MainItemName = ({ item }: { item: ListItemsType }) => {
  const currentIndex = useSelector((state: SliderStateType) => state.currentIndex);
  const itemList: number = 3;
  const transitionTime: number = 2000;
  const [transition, setTransition] = useState<boolean>(true);
  //TODO: replace시 잠깐 멈추는거 수정하기
  const replaceTransition = () => {
    setTimeout(() => {
      setTransition(false);
    }, transitionTime + 1000);
    setTimeout(() => {
      setTransition(true);
    }, transitionTime + 1050);
  };
  if (currentIndex === itemList) replaceTransition();
  if (currentIndex === -1) replaceTransition();
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
                    ? `transform 1s linear ${index / 10 + 1}s, opacity 0.5s linear ${
                        index / 10 + 1
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
  left: 50%;
  top: 65%;
  text-align: center;
  transform: translateX(-50%);
`;
const NameWrap = styled.span`
  ${({ theme }) => {
    return css`
      ${theme.flex.flexCenter};
    `;
  }};
  @keyframes name-start {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
      transform: translate3d(0, -100%, 0) rotateX(-90deg);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) rotateX(0deg);
    }
  }
  animation: name-start 2s 1 linear 3s;
`;
const ItemName = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.subtitle};
      font-weight: ${theme.font.weight.normal};
    `;
  }};
`;
const SubName = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.font.size.paragraph};
      font-weight: ${theme.font.weight.light};
    `;
  }};
  opacity: 0;
  animation: itemName 6s infinite linear 0.5s;
`;
