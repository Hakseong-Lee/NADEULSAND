import mainCaramel from '../../public/assets/img/mainCaramel.webp';
import mainStrawberry from '../../public/assets/img/mainStrawberry.webp';
import mainKakao from '../../public/assets/img/mainKakao.webp';

export interface ListItemsType {
  name: string;
  nameArr: string[];
  src: any;
  num: number;
}

export const listItems: ListItemsType[] = [
  {
    name: 'caramel',
    nameArr: ['C', 'A', 'R', 'A', 'M', 'E', 'L'],
    src: mainCaramel,
    num: 0,
  },
  {
    name: 'strawberry',
    nameArr: ['S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y'],
    src: mainStrawberry,
    num: 1,
  },
  {
    name: 'kakao',
    nameArr: ['K', 'A', 'K', 'A', 'O'],
    src: mainKakao,
    num: 2,
  },
  {
    name: 'caramel',
    nameArr: ['C', 'A', 'R', 'A', 'M', 'E', 'L'],
    src: mainCaramel,
    num: 0,
  },
  {
    name: 'strawberry',
    nameArr: ['S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y'],
    src: mainStrawberry,
    num: 1,
  },
  {
    name: 'kakao',
    nameArr: ['K', 'A', 'K', 'A', 'O'],
    src: mainKakao,
    num: 2,
  },
];
