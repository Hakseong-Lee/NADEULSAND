import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentIndexState } from '../../Recoil/atoms';

interface PropsType {
  name: string;
  nameArr: string[];
  num: number;
}

const MainItemName = ({ item }: { item: PropsType }) => {
  const [currentItemIndex, setCurrentItemIndex] = useRecoilState<number>(currentIndexState);
  return (
    <>
      <NameContainer>
        <NameWrap className={`${item.name}`} itemNum={item.num} currentItemNum={currentItemIndex}>
          {item.nameArr.map((item: string, index: number) => {
            return (
              <ItemName
                key={index}
                style={{
                  animationDelay: `${index / 20 + 3.2}s`,
                }}
              >
                {item}
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
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 65%;
  text-align: center;
  transform: translateX(-50%);
`;
const NameWrap = styled.span<{ currentItemNum: number; itemNum: number }>`
  z-index: 10;
  visibility: ${(props) => (props.currentItemNum === props.itemNum ? 'visible' : 'hidden')};
  ${({ theme }) => {
    return css`
      ${theme.flex.flexCenter};
    `;
  }};
  transition: transform 3s ease-in-out;
  @keyframes itemName-in {
    0% {
      transform: translate(20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
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
  animation: name-start 1.5s 1 linear 3s;
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
  z-index: 10;
  opacity: 1;
  animation: name-start 2s 1 linear 3s;
`;
